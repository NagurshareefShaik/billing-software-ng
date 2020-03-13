import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDayInfoComponent } from './billing-day-info.component';

describe('BillingDayInfoComponent', () => {
  let component: BillingDayInfoComponent;
  let fixture: ComponentFixture<BillingDayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
