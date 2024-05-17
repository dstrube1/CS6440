import { Component, OnInit } from '@angular/core';
import {PatientService} from '../service/patient.service';
import {ImagingStudy} from '../model/imaging-study';

@Component({
  selector: 'app-imaging-studies',
  templateUrl: './imaging-studies.component.html',
  styleUrls: ['./imaging-studies.component.scss']
})
export class ImagingStudiesComponent implements OnInit {

  constructor(private patient: PatientService) { }

  studies: ImagingStudy[] = [];

  ngOnInit(): void {
    this.studies.push(...this.patient.getPatient().diagnosticImages);
  }

}
