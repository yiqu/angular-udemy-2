import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink } from '../shared/models/nav-item.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

  headerList: NavHeaderList[] = [];
  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router) {
    this.createAllOptions();
  }

  createAllOptions() {
    this.headerList.push(
      new NavHeaderList(new NavHeader("Health"), [
        new NavHeaderLink("Start training", "home", ["/", "home", "new"]),
        new NavHeaderLink("Training in progress", "face", ["/", "home", "progress", "all"]),
        new NavHeaderLink("My trainings", "sports_handball", ["/", "my-trainings", "landing"]),
        new NavHeaderLink("Edit My Trainings", "edit", ["/", "my-trainings", "edit-exer"]),
        new NavHeaderLink("Add new Trainings", "add", ["/", "my-trainings", "new-exer"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"]),
        // new NavHeaderLink("Option 2", "assessment", ["/", "listings2"])
      ]),
      new NavHeaderList(new NavHeader("Help & Settings"), [
        new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
      ])
    );
  }

  ngOnInit() {

  }

  onNavClose() {
    this.navClose.emit(true);
  }

  onNavItemClick() {
    this.navClose.emit(true);
  }

  onTitleClick() {
    this.router.navigate(['/']);
    this.navClose.emit(true);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}

