import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { interval, Observable, timer } from 'rxjs';
import { map, tap, take, takeUntil } from 'rxjs/operators';
import { Exercise } from 'src/app/admin/store/admin.state';
import { CoreExerciseService } from 'src/app/core/core.service';

export const ACTION_GIVEUP = 'Giveup';

@Component({
  selector: 'app-core-progress-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class ExerciseCounterComponent implements OnInit, OnDestroy {

  @Input()
  exercise: Exercise | undefined | null;

  @Output()
  actionClick: EventEmitter<string> = new EventEmitter<string>();

  timer$: Observable<number> | undefined = undefined;
  compDest$: Subject<any> = new Subject<any>();

  currentSet: number = 1;
  currentTime: number = 0;
  timeLeft: number | undefined = undefined;
  timerColor: string = 'accent';
  totalTimePerSet: number = 0;
  timeLeftText: string = '';
  setFinished: boolean = false;
  exerciseCompleted: boolean = false;

  isPaused: boolean = false;

  constructor(public cs: CoreExerciseService) {
  }

  ngOnInit() {
    if (this.exercise) {
      this.startTimer(this.exercise?.countPerSet);
    }
  }

  startTimer(timeLeft: number) {
    if (this.exercise) {
      this.timer$ = this.createTimer(this.exercise, timeLeft);
      this.timeLeft = timeLeft;
      this.totalTimePerSet = this.exercise.countPerSet;
    }

    if (this.timer$) {
      this.timer$.pipe(
        map((res) => {
          return res + 1;
        }),
        tap((res) => {
          const progressPerSecond = (100 / this.totalTimePerSet);
          this.currentTime = this.currentTime + progressPerSecond;
        }),
        takeUntil(this.compDest$)
      ).subscribe(
        (res: any) => {
          this.timeLeft = timeLeft - res;
          this.timeLeftText = this.getTimeLeftText(this.timeLeft, this.exercise!.countPerSet);
        },
        (_) => {},
        () => {
          this.currentSetFinished();
        }
      )
    }
  }

  createTimer(exercise: Exercise, timeTill: number): Observable<number> {
    return timer(1000, 1000).pipe(
      take(timeTill ?? exercise.countPerSet),
      takeUntil(this.compDest$)
    );
  }

  getTimeLeftText(timeLeft: number, total: number): string {
    let result = timeLeft + ' seconds remaining';
    const currentPercent = (total - timeLeft) / total;
    const halfWay: boolean = currentPercent > 0.5;
    const almostThere = currentPercent > 0.7;
    const dontGiveup = currentPercent > 0.85;
    if (timeLeft === 0) {
      result = "Good job, finished current set!";
    } else if (dontGiveup) {
      result += ' ( dont\'t give up now! )';
    } else if (almostThere) {
      result += ' ( almost there! )';
    } else if (halfWay) {
      result += ' ( more than half way there! )';
    }
    return result;
  }

  getNextSet(previousSet: number, max: number): number {
    if (previousSet < max) {
      return previousSet + 1;
    }
    return NaN;
  }

  /**
   * Executed when Timer is 0 or paused
   */
  currentSetFinished() {
    if (!this.timeLeft) { // done
      this.timerColor = 'primary';
      this.setFinished = true;
      this.currentSet = this.getNextSet(this.currentSet, this.exercise!.sets);
      // Exercise completed
      if (!this.currentSet) {
        this.exerciseCompleted = true;
        this.cs.saveExericseWithStatus(this.exercise!, "Completed");
      }
    } else { // paused
      console.log("in else")
    }
  }

  resetStates() {
    this.currentTime = 0;
    this.timeLeft = undefined;
    this.timerColor = 'accent';
    this.timeLeftText = '';
    this.setFinished = false;
  }

  onStartSet() {
    this.resetStates();
    this.ngOnInit();
  }

  onPause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.compDest$.next();
    } else {
      if (this.timeLeft) {
        this.startTimer(this.timeLeft);
      }
    }
  }

  onGiveup() {
    this.actionClick.emit(ACTION_GIVEUP);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
