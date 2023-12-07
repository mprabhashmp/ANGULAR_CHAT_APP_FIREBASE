import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassswordComponent } from './forgotpasssword.component';

describe('ForgotpassswordComponent', () => {
  let component: ForgotpassswordComponent;
  let fixture: ComponentFixture<ForgotpassswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpassswordComponent]
    });
    fixture = TestBed.createComponent(ForgotpassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
