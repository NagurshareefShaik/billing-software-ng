import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingItemDialogComponent } from './billing-item-dialog.component';

describe('BillingItemDialogComponent', () => {
  let component: BillingItemDialogComponent;
  let fixture: ComponentFixture<BillingItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
