import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRequestsComponent } from './medication-requests.component';

describe('MedicationRequestsComponent', () => {
  let component: MedicationRequestsComponent;
  let fixture: ComponentFixture<MedicationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
