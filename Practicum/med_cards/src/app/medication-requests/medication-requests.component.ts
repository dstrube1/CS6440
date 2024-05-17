import { Component, OnInit } from '@angular/core';
import {Medication} from '../model/medication';
import {PatientService} from '../service/patient.service';
import {MedicationRequest} from '../model/medication-request';

@Component({
  selector: 'app-medication-requests',
  templateUrl: './medication-requests.component.html',
  styleUrls: ['./medication-requests.component.scss']
})
export class MedicationRequestsComponent implements OnInit {

  constructor(private patient: PatientService) { }

  medications: MedicationRequest[] = [];

  ngOnInit(): void {
    this.medications.push(...this.patient.getPatient().medications);
  }

}
