import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private as: AdminService) {
    this.as.setCurrentPageState(null);
  }

  ngOnInit() {

  }

  onActionClick(action: string) {
    if (action === 'add') {
      this.router.navigate(['../', 'new-exer'], {relativeTo: this.route});
    } else if (action === 'edit') {
      this.router.navigate(['../', 'edit-exer'], {relativeTo: this.route});
    }
  }
}
