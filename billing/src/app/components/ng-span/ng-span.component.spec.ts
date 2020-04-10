import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSpanComponent } from './ng-span.component';

describe('NgSpanComponent', () => {
  let component: NgSpanComponent;
  let fixture: ComponentFixture<NgSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
