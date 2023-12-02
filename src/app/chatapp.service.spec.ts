import { TestBed } from '@angular/core/testing';

import { ChatappService } from './chatapp.service';

describe('ChatappService', () => {
  let service: ChatappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
