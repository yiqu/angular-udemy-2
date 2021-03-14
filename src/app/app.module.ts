import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleBundle } from './shared/material-bundle.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponentModule } from './404/404.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FooterModule } from './footer/footer.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import * as  fromAppReducers  from './store/global/app.reducer';
import { appEffects } from './store/global/app.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromAppReducers.appReducers, {
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        //strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 45,
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    MaterialModuleBundle,
    NotFoundComponentModule,
    CoreModule,
    FlexLayoutModule,
    MatMomentDateModule,
    TopNavModule,
    SideNavModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
