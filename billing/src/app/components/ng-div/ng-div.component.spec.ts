import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDivComponent } from './ng-div.component';

describe('NgDivComponent', () => {
  let component: NgDivComponent;
  let fixture: ComponentFixture<NgDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
