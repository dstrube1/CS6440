import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatientService} from '../service/patient.service';

@Injectable({
  providedIn: 'root'
})
export class FhirhttpService {
  originalUrl = 'https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImoiOiIxIiwiZSI6ImU0NDNhYzU4LThlY2UtNDM4NS04ZDU1LTc3NWMxYjhmM2EzNyJ9/fhir';
  startUrl = this.originalUrl + '/metadata';

  redirectUri = 'http://localhost:4200';

  authorizeUri: string;

  authorizedUrlEncoded: string;


  constructor(private http: HttpClient, private patientService: PatientService) { }

  getPatientById(id: string): Promise<any> {
    return this.http.get(this.originalUrl + '/Patient/' + id + '/$everything').toPromise();
  }

  getPatientByName(name: string): Promise<any> {
    return this.http.get(this.originalUrl + '/Patient?given=' + name).toPromise();
  }

  getConditionsForPatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/Condition?patient=' + patientId).toPromise();
  }

  getMedicationRequestsForPatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/MedicationRequest?patient=' + patientId).toPromise();
  }

  getProceduresForPattient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/Procedure?patient=' + patientId).toPromise();
  }

  getObservationsForPatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/Observation?patient=' + patientId).toPromise();
  }

  getDiagnosticReportForpatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/ImagingStudy?patient=' + patientId).toPromise();
  }

  getClinicalImpressionForPatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/ClinicalImpression?patient=' + patientId).toPromise();
  }

  getResearchSubjectForPatient(patientId: string): Promise<any> {
    return this.http.get(this.originalUrl + '/ResearchSubject?patient=' + patientId).toPromise();
  }


  initialize(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.startUrl)
        .toPromise()
        .then((response: any) => {
          console.log(response);
          this.authorizeUri = response.rest[0].security.extension[0].extension[0].valueUri;
          console.log(this.authorizeUri);
          this.authorizedUrlEncoded = this.authorizeUri + '&redirect_uri=' + encodeURI(this.redirectUri);
          console.log(this.authorizedUrlEncoded);
          this.http.get(this.authorizedUrlEncoded);
        }, e => {
          console.error(e);
        });
    });
  }
}
