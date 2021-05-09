import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { CompletedTrainingComponent } from './completed/completed.component';
import { CoreComponent } from './core.component';
import { NewTrainingComponent } from './new/new.component';
import { ProgressAllComponent } from './progress/all/all.component';
import { ExerciseCounterComponent } from './progress/current/counter/counter.component';
import { ProgressCurrentComponent } from './progress/current/current.component';
import { ProgressLandingComponent } from './progress/landing/landing.component';
import { ProgressComponent } from './progress/progress.component';
import { coreExerEffects } from './store/core.effects';
import { exerEntityReducer } from './store/core.reducer';
import { exerciseReducer } from './store/current.reducer';


@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature("exerciseCore", exerEntityReducer),
    StoreModule.forFeature("exercise", exerciseReducer),
    EffectsModule.forFeature(coreExerEffects),
    RouterModule,
    ReactiveComponentModule,
    SharedComponentsModule
  ],

  exports: [
  ],

  declarations: [
    CoreComponent,
    CompletedTrainingComponent,
    ProgressComponent,
    NewTrainingComponent,
    ProgressAllComponent,
    ProgressCurrentComponent,
    ProgressLandingComponent,
    ExerciseCounterComponent
  ],

  providers: [],
})
export class CoreModule { }
