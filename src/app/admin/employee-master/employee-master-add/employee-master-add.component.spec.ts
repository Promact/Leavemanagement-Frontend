import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMasterAddComponent } from './employee-master-add.component';

describe('EmployeeMasterAddComponent', () => {
  let component: EmployeeMasterAddComponent;
  let fixture: ComponentFixture<EmployeeMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
