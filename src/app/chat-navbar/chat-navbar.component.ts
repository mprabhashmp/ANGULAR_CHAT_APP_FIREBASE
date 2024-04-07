import { Component } from '@angular/core';


import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.css']
})
export class ChatNavbarComponent {

  user: boolean = false;
  GoogleSignin: string = "../img/btn_google_signin_dark_pressed_web.png";

  googleSignIn() {
    this.user = true;
  }

  signOut() {
    this.user = false;
  }
  
  
}
