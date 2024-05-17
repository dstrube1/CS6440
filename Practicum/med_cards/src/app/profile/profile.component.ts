import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FhirhttpService} from '../util/fhirhttp.service';
import {PatientService} from '../service/patient.service';
import {Patient} from '../model/patient';
import {PatientParserService} from '../util/patient-parser.service';
import {Condition} from '../model/condition';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patient: Patient;
  conditions: Condition[] = [];

  constructor(private route: ActivatedRoute, private fhirService: FhirhttpService,
              public patientService: PatientService,
              private parse: PatientParserService) { }

  ngOnInit(): void {
    this.patient = this.patientService.getPatient();
    this.conditions.push(...this.patient.conditions.filter(c => c.active));

    // if (this.patient.conditions.filter(item => item.))
    // this.route.params.subscribe(params => {
    //   if (params.id) {
    //     if (this.patientService.patients.length === 0) {
    //       this.fhirService.initialize()
    //         .then(patients => {
    //           const parseResult = this.parse.getPatients(patients);
    //           this.patientService.setPatients(parseResult);
    //           this.loadData(params.id);
    //         });
    //     } else {
    //       this.loadData(params.id);
    //     }
    //   } else {
    //     alert('Patient id is required.');
    //   }
    // });
  }

  // loadData(id): void {
  //   this.patient = this.patientService.patients.filter(p => p.id === id)[0];
  //   this.patientService.setPatient(this.patient);
  //   this.fhirService.getConditionsForPatient(id)
  //     .then(c => {
  //       const result = this.parse.getConditions(c);
  //       const strokeConditions = result.filter((co) => co.conditionIds.includes('230690007'));
  //       this.patientService.setPatientConditions(strokeConditions);
  //     });
  //
  //   this.fhirService.getMedicationRequestsForPatient(id)
  //     .then(mr => {
  //       const result = this.parse.getMedicationRequests(mr);
  //       this.patientService.setMedicationRequests(result);
  //     });
  //
  //   this.fhirService.getObservationsForPatient(id)
  //     .then(o => {
  //       const result = this.parse.getObservations(o);
  //       this.patientService.setPatientObservations(result);
  //     });
  //
  //   this.fhirService.getProceduresForPattient(id)
  //     .then(p => {
  //       const result = this.parse.getProcedures(p);
  //       this.patientService.setPatientProcedures(result);
  //     });
  // }
}
