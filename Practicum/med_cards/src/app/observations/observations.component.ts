import { Component, OnInit } from '@angular/core';
import {PatientService} from '../service/patient.service';
import {Observation} from '../model/observation';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  observations: Observation[] = [];

  constructor(private patient: PatientService) { }

  ngOnInit(): void {
    this.observations.push(...this.patient.getPatient().observations);
  }

}
