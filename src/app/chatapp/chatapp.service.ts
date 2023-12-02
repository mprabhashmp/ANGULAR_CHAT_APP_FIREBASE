import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatappService {
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  getMessages(message: string, userId: string) {
    return this.firestore.collection('messages').add({
      message: message,
      userId: userId,
      timestamp: new Date().getTime()
    });
  }

  fetchMessages() {
    return this.firestore.collection('messages', ref => ref.orderBy('timestamp')).valueChanges();
  }

  subscribeToChat() {
    return this.firestore.collection('messages', ref => ref.orderBy('timestamp')).valueChanges();
  }

  unsubscribeFromChat() {
    // Unsubscribe logic
  }
}
