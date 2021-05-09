import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/admin/store/admin.state';

export const ACTION_GIVEUP = 'Giveup';

@Component({
  selector: 'app-core-progress-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class ExerciseCounterComponent implements OnInit {

  @Input()
  exercise: Exercise | undefined | null;

  @Output()
  actionClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    console.log(this.exercise, 'exer in prog')
  }

  onPause() {

  }

  onGiveup() {
    this.actionClick.emit(ACTION_GIVEUP);
  }
}
