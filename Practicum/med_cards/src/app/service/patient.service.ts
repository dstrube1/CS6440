import {Injectable} from '@angular/core';
import {Patient} from '../model/patient';
import {Observation} from '../model/observation';
import {Condition} from '../model/condition';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  // These data points are for the selected patient
  private patient: Patient;

  constructor() { }

  setPatient(p: Patient): void {
    this.patient = p;
  }

  getPatient(): Patient {
    return this.patient;
  }


}
