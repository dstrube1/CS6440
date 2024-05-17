import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FhirhttpService} from './util/fhirhttp.service';
import { PatientCardComponent } from './ui/patient-card/patient-card.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {CommonModule} from '@angular/common';
import {PatientService} from './service/patient.service';
import { GenericCardComponent } from './ui/generic-card/generic-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InactiveComponent } from './inactive/inactive.component';
import { ImpressionsComponent } from './impressions/impressions.component';
import { ObservationsComponent } from './observations/observations.component';
import { MedicationRequestsComponent } from './medication-requests/medication-requests.component';
import { LabsComponent } from './labs/labs.component';
import { ImagingStudiesComponent } from './imaging-studies/imaging-studies.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    PatientCardComponent,
    NavigationComponent,
    GenericCardComponent,
    InactiveComponent,
    ImpressionsComponent,
    ObservationsComponent,
    MedicationRequestsComponent,
    LabsComponent,
    ImagingStudiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AngularSvgIconModule.forRoot()

  ],
  providers: [
    FhirhttpService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
