import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isPresent = false;
  constructor(private router: Router, private patientService: PatientService) { }

  ngOnInit(): void {

  }


  routeSearch(): void {
    this.patientService.setPatient(undefined);
    this.router.navigate(['search']);
  }

  routeProfile(): void {
    this.router.navigate(['profile']);
  }

  routeInactive(): void {
    this.router.navigate(['inactive']);
  }

  routeImpressions(): void {
    this.router.navigate(['impressions']);
  }

  routeObservations(): void {
    this.router.navigate(['observations']);
  }

  routeMedication(): void {
    this.router.navigate(['medication-requests']);
  }

  routeLabs(): void {
    this.router.navigate(['labs']);
  }

  routeImaging(): void {
    this.router.navigate(['imaging-studies']);
  }
}
