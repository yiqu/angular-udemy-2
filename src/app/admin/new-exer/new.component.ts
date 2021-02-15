import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { createFormControl2 } from 'src/app/shared/general.utils';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-new',
  templateUrl: 'new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewExerComponent implements OnInit, OnDestroy {

  public mainFg: FormGroup;
  public setOptions: number[] = [3, 5 , 7, 10];
  public timeOptions: number[] = [10, 20, 30, 40, 50, 60];
  private compDest$: Subject<void> = new Subject<void>();

  get exercisesFa(): FormArray {
    return this.mainFg.get('exercises') as FormArray;
  }

  get exercisesFaAny(): any {
    return this.mainFg.get('exercises');
  }

  constructor(private fb: FormBuilder, private as: AdminService) {
    this.mainFg = this.createMainFg();
    this.as.setCurrentPageState("new");
  }

  ngOnInit() {
    console.log(this.mainFg)
    this.mainFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      console.log(this.mainFg.value);

    });
  }

  createMainFg(): FormGroup {
    return this.fb.group({
      exercises: this.fb.array([
        this.createExerciseFg()
      ])
    });
  }

  createExerciseFg(): FormGroup {
    return this.fb.group({
      name: createFormControl2(null, false, [Validators.required]),
      sets: createFormControl2(3, false),
      countPerSet: createFormControl2(30, false),
      setUnitTypeIsTime: createFormControl2(true, false),
    });
  }

  onAddAnother() {
    console.log(this.exercisesFa.length)
    this.exercisesFa.push(this.createExerciseFg());
  }

  onFormSubmit() {
    console.log("saving")
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
