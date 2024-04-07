import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNavbarComponent } from './chat-navbar.component';

describe('ChatNavbarComponent', () => {
  let component: ChatNavbarComponent;
  let fixture: ComponentFixture<ChatNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatNavbarComponent]
    });
    fixture = TestBed.createComponent(ChatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
