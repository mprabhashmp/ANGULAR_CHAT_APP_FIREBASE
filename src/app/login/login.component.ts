import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    public authService: AuthServiceService
  ) { }
  ngOnInit() { }
}
