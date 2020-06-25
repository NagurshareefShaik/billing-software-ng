import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLabelComponent } from './ng-label.component';

describe('NgLabelComponent', () => {
  let component: NgLabelComponent;
  let fixture: ComponentFixture<NgLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
