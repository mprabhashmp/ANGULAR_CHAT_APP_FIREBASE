import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private db: AngularFireDatabase) {}

  getMessages() {
    return this.db.list('/messages').valueChanges();
  }

  sendMessage(text: string) {
    this.db.list('/messages').push({
      text,
      createdAt: new Date().toString()
    });
  }
}
