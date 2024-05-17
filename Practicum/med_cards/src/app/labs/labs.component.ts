import { Component, OnInit } from '@angular/core';
import {PatientService} from '../service/patient.service';
import {DiagnosticReport} from '../model/diagnostic-report';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  constructor(private patient: PatientService) { }

  labs: DiagnosticReport[] = [];

  ngOnInit(): void {
    this.labs.push(...this.patient.getPatient().labs);
  }

}
