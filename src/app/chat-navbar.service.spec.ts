import { TestBed } from '@angular/core/testing';

import { ChatNavbarService } from './chat-navbar/chat-navbar.service';

describe('ChatNavbarService', () => {
  let service: ChatNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
