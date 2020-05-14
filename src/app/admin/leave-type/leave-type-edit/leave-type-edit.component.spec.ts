import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeEditComponent } from './leave-type-edit.component';

describe('LeaveTypeEditComponent', () => {
  let component: LeaveTypeEditComponent;
  let fixture: ComponentFixture<LeaveTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
