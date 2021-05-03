import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { CompletedTrainingComponent } from './core/completed/completed.component';
import { CoreComponent } from './core/core.component';
import { NewTrainingComponent } from './core/new/new.component';
import { ProgressAllComponent } from './core/progress/all/all.component';
import { ProgressCurrentComponent } from './core/progress/current/current.component';
import { ProgressComponent } from './core/progress/progress.component';
import { NetworkAwarePreloadStrategy } from './preload-strat';
import { UserPresentGuard } from './shared/guards/auth/user.guard';
import { CurrentUserResolver } from './shared/resolvers/user.resolver';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: CoreComponent, children: [
    { path: "", redirectTo: "new", pathMatch: "full" },
    { path: 'new', component: NewTrainingComponent },
    { path: 'progress', component: ProgressComponent,
      children: [
        { path: '', redirectTo: "all", pathMatch: "full" },
        { path: 'all', component: ProgressAllComponent },
        { path: ':exerId', component: ProgressCurrentComponent },
      ]
    },
    { path: 'completed', component: CompletedTrainingComponent }],
    resolve: { currentUser: CurrentUserResolver }
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    resolve: { currentUser: CurrentUserResolver }
  },
  {
    path: "my-trainings",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    resolve: { currentUser: CurrentUserResolver }
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
