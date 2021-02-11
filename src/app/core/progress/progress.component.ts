import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-core-progress',
  templateUrl: 'progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
