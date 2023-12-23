import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit{
  constructor(
    private router: Router,
    public authService: AuthServiceService
  ) { }
  ngOnInit() {
  }

  isLoading = false;
  verifyEmail(): void {
    this.isLoading = true;
    this.authService.SendVerificationMail();

    // Simulate a delay for demonstration purposes (replace with actual API call)
    setTimeout(() => {
      // Redirect to login page after the delay
      this.router.navigate(['/login']);
    }, 5000); // Change the delay time as needed
  }
}
