import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  
  @Input() message: any;
  @Input() user: any; // Assuming 'message' has the same structure as in the React code
  @Input() isCurrentUser: boolean; //

  constructor() {}
}
