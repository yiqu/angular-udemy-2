import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createFormControl2 } from '../shared/general.utils';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public mainFg: FormGroup;
  public setOptions: number[] = [3, 5 , 7, 10];
  public timeOptions: number[] = [10, 20, 30, 40, 50, 60];

  get exercisesFa(): FormArray {
    return this.mainFg.get('exercises') as FormArray;
  }

  get exercisesFaAny(): any {
    return this.mainFg.get('exercises');
  }

  constructor(private fb: FormBuilder) {
    this.mainFg = this.createMainFg();
  }

  ngOnInit() {
    console.log(this.mainFg)
    this.mainFg.valueChanges.subscribe((res) => console.log(this.mainFg));
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
      timePerSet: createFormControl2(30, false)
    });
  }

  onAddAnother() {
    console.log(this.exercisesFa.length)
    this.exercisesFa.push(this.createExerciseFg());
  }

  onFormSubmit() {
    console.log("saving")
  }
}
