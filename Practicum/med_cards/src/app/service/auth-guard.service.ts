import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {PatientService} from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private patient: PatientService) { }

  canActivate(): boolean {
    return this.patient.getPatient() ? true : false;
  }
}
