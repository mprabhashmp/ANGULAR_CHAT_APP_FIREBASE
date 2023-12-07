import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forgotpasssword',
  templateUrl: './forgotpasssword.component.html',
  styleUrls: ['./forgotpasssword.component.css']
})
export class ForgotpassswordComponent implements OnInit{

  constructor(
    public authService: AuthServiceService
  ) { }


  ngOnInit() {
  }
}
