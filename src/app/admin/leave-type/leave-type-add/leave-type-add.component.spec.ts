import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeAddComponent } from './leave-type-add.component';

describe('LeaveTypeAddComponent', () => {
  let component: LeaveTypeAddComponent;
  let fixture: ComponentFixture<LeaveTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
