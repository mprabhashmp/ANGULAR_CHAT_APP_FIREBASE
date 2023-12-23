import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpasssword',
  templateUrl: './forgotpasssword.component.html',
  styleUrls: ['./forgotpasssword.component.css']
})
export class ForgotpassswordComponent implements OnInit{

  constructor(
    public authService: AuthServiceService , private router:Router,
  ) { }


  ngOnInit() {
  }


  isLoading: boolean = false;
  Forgotpass(email: string): void {
    this.isLoading = true;

    setTimeout(() => {
      // Redirect to login page after the delay
      this.router.navigate(['/login']);
    }, 3000); // 

    // Call the AuthService method
    this.authService.ForgotPassword(email)
      .then(() => {
        // Reset is successful, hide loading indicator
        this.isLoading = false;
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error(error);
        // Hide loading indicator even in case of an error
        this.isLoading = false;
      });
  }
}
