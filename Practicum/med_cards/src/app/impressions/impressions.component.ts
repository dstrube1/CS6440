import { Component, OnInit } from '@angular/core';
import {ClinicalImpression} from '../model/clinical-impression';
import {PatientService} from '../service/patient.service';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.scss']
})
export class ImpressionsComponent implements OnInit {

  constructor(private patient: PatientService) { }

  clinicalImpressions: ClinicalImpression[] = [];

  ngOnInit(): void {
    this.clinicalImpressions.push(...this.patient.getPatient().clinicalImpressions);
  }

}
