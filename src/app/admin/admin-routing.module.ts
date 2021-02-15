import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditExerComponent } from './edit-exec/edit.component';
import { AdminLandingComponent } from './landing/landing.component';
import { NewExerComponent } from './new-exer/new.component';

export const routes: Routes = [
  { path: "", component: AdminComponent,
    children: [
      { path: "", redirectTo: "landing", pathMatch: "full" },
      { path: "landing", component: AdminLandingComponent },
      { path: "new-exer", component: NewExerComponent },
      { path: "edit-exer", component: EditExerComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
