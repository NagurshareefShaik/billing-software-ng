import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePgeComponent } from './home-pge.component';

describe('HomePgeComponent', () => {
  let component: HomePgeComponent;
  let fixture: ComponentFixture<HomePgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
