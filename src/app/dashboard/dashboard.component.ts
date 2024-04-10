import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DashboardService } from './dashboard.service';
import { Unsubscribe } from 'firebase/firestore';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Message } from '../message';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthServiceService, private dashboard: DashboardService) {}
  @Input() scroll: HTMLElement;
  messages: Message[] = [];
  private subscription: Unsubscribe;
 

  ngOnInit(): void {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    this.subscription = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() } as Message);
      });
      const sortedMessages = fetchedMessages.sort((a, b) => a.createdAt - b.createdAt);
      this.messages = sortedMessages;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription();
    }
  }


}

