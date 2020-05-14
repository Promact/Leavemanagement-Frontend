import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationAddComponent } from './leave-application-add.component';

describe('LeaveApplicationAddComponent', () => {
  let component: LeaveApplicationAddComponent;
  let fixture: ComponentFixture<LeaveApplicationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
