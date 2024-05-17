import { Component, OnInit } from '@angular/core';
import {Condition} from '../model/condition';
import {PatientService} from '../service/patient.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {

  conditions: Condition[] = [];

  constructor(private patient: PatientService) { }

  ngOnInit(): void {
    this.conditions.push(...this.patient.getPatient().conditions.filter(c => !c.active));
  }

}
