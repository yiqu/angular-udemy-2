import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, ParamMap, Router, UrlSegment } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { Tab } from './training.model';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {

  compDest$: Subject<void> = new Subject<void>();
  tabs: Tab[] = [];
  activeTab: Tab;

  constructor(public as: AuthService, private router: Router, private route: ActivatedRoute) {
    this.tabs.push(new Tab("new", "New"),
      new Tab("progress", "In Progress"),
      new Tab("completed", "Completed")
    );

    this.activeTab = this.tabs[0];
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      startWith(window.location.href),
      map((res) => this.getUrlLastSegment(res)),
      map((path) => this.calculateTabIndex(path)),
      takeUntil(this.compDest$)
    )
    .subscribe((res: number) => this.selectTab(res))
  }

  getUrlLastSegment(res: Event | string): string | undefined {
    let fullUrl: string | undefined = "";
    if (res instanceof NavigationEnd) {
      fullUrl = res.url.split("/").pop();
    } else {
      fullUrl = (res as string).split("/").pop();
    }
    return fullUrl;
  }

  calculateTabIndex(path?: string): number {
    const result: number = this.tabs.findIndex((tab) => {
      return tab.id === path;
    });
    return result;
  }

  selectTab(res: number) {
    if (res > 0) {
      this.activeTab = this.tabs[res];
    } else {
      this.activeTab = this.tabs[0];
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
