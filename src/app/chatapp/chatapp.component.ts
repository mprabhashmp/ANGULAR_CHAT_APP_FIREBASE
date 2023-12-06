import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import io from 'socket.io-client';
import { ChatappService } from './chatapp.service';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent {
  messages: any[] = [];
  newMessage: string = '';

  private messagesSubscription: Subscription | undefined;

  constructor(private chatService: ChatappService) {}

  // ngOnInit(): void {
  //   this.messagesSubscription = this.chatService.getMessages().subscribe((messages) => {
  //     this.messages = messages;
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.messagesSubscription) {
  //     this.messagesSubscription.unsubscribe();
  //   }
  // }

  // sendMessage() {
  //   if (this.newMessage.trim() !== '') {
  //     this.chatService.sendMessage(this.newMessage).then(() => {
  //       this.newMessage = ''; // Clear the input field after sending message
  //     }).catch((error) => {
  //       console.error('Error sending message:', error);
  //     });
  //   }
  // }

  // signOut() {
  //   this.chatService.signOut().then(() => {
  //     // Handle successful sign-out
  //   }).catch((error) => {
  //     console.error('Error signing out:', error);
  //   });
  // }

 
}
