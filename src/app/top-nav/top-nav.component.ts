import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { MenuItem } from '../shared/models/nav-item.model';
import { FormControl } from '@angular/forms';
import { IsMobileService } from '../shared/services/is-mobile.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = environment.appTitle;
  compDest$: Subject<any> = new Subject<any>();
  leftNavMenuState: boolean = false;
  userMenuItems: MenuItem[] = [];

  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute,
    public ims: IsMobileService, public as: AuthService) {
  }

  ngOnInit() {
    this.as.currentUser$.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
        this.userMenuItems = [];
        if (res) {
          this.userMenuItems.push(new MenuItem("exit_to_app", "Sign out", "signout"))
        } else {
          this.userMenuItems.push(new MenuItem("record_voice_over", "Sign in", "signin"));
        }
      }
    )
  }

  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoClick.emit();
  }

  onMenuClick() {
    this.leftNavMenuState = !this.leftNavMenuState;
    this.navToggle.emit(true);
  }

  onAuthClick() {
    this.router.navigate(['auth']);
  }

  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  onSignoutClick() {
    this.as.onSignout();
  }

  navigateTo(id: string) {
    this.router.navigate(['/', id]);
  }


  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
