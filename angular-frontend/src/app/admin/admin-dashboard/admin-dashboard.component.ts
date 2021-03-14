
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  user: User;
  request: [];
  noData: boolean = false;

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.authService.userObject.subscribe(res => this.user = res);
    this.getDataScraping();
  }

 

  getDataScraping() {
    this.adminService.getData().subscribe(
      (result: any) => {
        this.request = result;
        if(this.request.length ==0){
          this.noData = true;
        }
      }
    );
  }
}
