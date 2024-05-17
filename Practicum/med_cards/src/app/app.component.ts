import {Component, OnInit} from '@angular/core';
import {FhirhttpService} from './util/fhirhttp.service';
import {PatientService} from './service/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  physicianName: string;

  constructor(private fhir: FhirhttpService, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.fhir.initialize();

  }

}
