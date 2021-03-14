import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EditExerComponent } from './edit-exec/edit.component';
import { AdminLandingComponent } from './landing/landing.component';
import { NewExerComponent } from './new-exer/new.component';
import { adminEffects } from './store/admin.effects';
import { adminStateReducer } from './store/admin.reducer';


@NgModule({
  imports: [
    AdminRoutingModule,
    MaterialModuleBundle,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("admin", adminStateReducer),
    EffectsModule.forFeature(adminEffects),
    PipeBundleModule,
    SharedComponentsModule
  ],

  exports: [],

  declarations: [
    AdminComponent,
    AdminLandingComponent,
    EditExerComponent,
    NewExerComponent
  ],

  providers: [],
})
export class AdminModule { }
