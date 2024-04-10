import { Component } from '@angular/core';
import { ChatappService } from './chatapp.service';

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent {


  message = '';
  messages: any[] = [];

  constructor(private chatService: ChatServiceService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
 
}
