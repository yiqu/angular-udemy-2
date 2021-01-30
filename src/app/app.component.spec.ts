import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FooterModule } from './footer/footer.module';
import { MaterialModuleBundle } from './shared/material-bundle.module';
import { PipeBundleModule } from './shared/pipes/pipe-bundle.module';
import { AuthService } from './shared/services/auth.service';
import { IsMobileService } from './shared/services/is-mobile.service';
import { SideNavModule } from './side-nav/side-nav.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopNavModule } from './top-nav/top-nav.module';

let authSvcStub: Partial<AuthService>;

  authSvcStub = {
    currentUser$: of(undefined),
  };


describe('AppComponent', () => {

  let fixture;
  let comp: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModuleBundle, BrowserAnimationsModule,
        SideNavModule,
        FooterModule,],
      declarations: [ AppComponent, TopNavComponent ],
      providers: [
        { provide: AuthService, useValue: authSvcStub }
      ]
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     comp    = fixture.componentInstance;

    // UserService from the root injector
    //let authsvc = TestBed.inject(AuthService);


  });
  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });


});
