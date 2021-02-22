import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { createFormControl2 } from 'src/app/shared/general.utils';
import { AdminService } from '../admin.service';
import { AdminNewExerSubMenu, NewExerUnitType } from '../store/admin.state';

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
    this.mainFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
    });

    this.as.newlyAddedExerType$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res: NewExerUnitType | undefined) => {
      if (res && res.name) {
        this.exercisesFa.push(this.createExerciseFg(res.name));
      }
    });

    this.as.onNewExerSaveClick$.pipe(
      filter((res: number | undefined) => {
        return !!res;
      }),
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.onFormSubmit();
    });
  }

  createMainFg(): FormGroup {
    return this.fb.group({
      exercises: this.fb.array([
        this.createExerciseFg()
      ])
    });
  }

  createExerciseFg(unitType?: AdminNewExerSubMenu): FormGroup {
    const type = unitType === "Time Based" ? true : false;
    return this.fb.group({
      name: createFormControl2(null, false, [Validators.required]),
      sets: createFormControl2(3, false),
      countPerSet: createFormControl2(30, false),
      setUnitTypeIsTime: createFormControl2(type, false),
    });
  }

  onAddAnother() {
    console.log(this.exercisesFa.length)
    this.exercisesFa.push(this.createExerciseFg());
  }

  onFormSubmit() {
    this.checkFormValid(this.mainFg.valid);
    console.log(this.mainFg.value)
  }

  checkFormValid(valid: boolean) {
    this.as.onSetFormValidStatus(valid);
  }

  ngOnDestroy() {
    this.as.resetNewExer();
    this.compDest$.next();
    this.compDest$.complete();
  }
}
