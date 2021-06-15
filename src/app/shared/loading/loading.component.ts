import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-loading-spinner',
  templateUrl: 'loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class SharedLoadingComponent implements OnInit {

  @Input()
  diamter: number = 45;

  constructor() { }

  ngOnInit() { }
}
