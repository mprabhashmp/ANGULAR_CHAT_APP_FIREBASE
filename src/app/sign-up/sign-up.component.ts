import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import {auth} from '../firebase'

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
