import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(
    private router: Router,
    public authService: AuthServiceService
  ) { }
  ngOnInit() { }

  signin(){
    this.router.navigate(['/login']);
  }
}
