import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorContractComponent } from './doctor-contract.component';

describe('DoctorContractComponent', () => {
  let component: DoctorContractComponent;
  let fixture: ComponentFixture<DoctorContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
