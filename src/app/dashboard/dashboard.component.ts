import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(public authService: AuthServiceService, private dashboard: DashboardService) {}
  
  ngOnInit(): void {}

  displayName: string = '';
  photoUrl: string = '';;
  user:any;

  saveProfile() {
    const { displayName, photoUrl, user} = this;
    if (displayName || photoUrl  ) {
      this.dashboard.saveUserData(user,displayName, photoUrl);
      // Clear the form fields after saving
      this.displayName = '';
      this.photoUrl = '';
    } else {
      console.error('Please fill in all fields');
    }
  }
}
