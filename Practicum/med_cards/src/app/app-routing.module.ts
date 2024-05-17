import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardService} from './service/auth-guard.service';
import {InactiveComponent} from './inactive/inactive.component';
import {ImpressionsComponent} from './impressions/impressions.component';
import {ObservationsComponent} from './observations/observations.component';
import {MedicationRequest} from './model/medication-request';
import {LabsComponent} from './labs/labs.component';
import {ImagingStudiesComponent} from './imaging-studies/imaging-studies.component';
import {MedicationRequestsComponent} from './medication-requests/medication-requests.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'inactive',
    component: InactiveComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'impressions',
    component: ImpressionsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'observations',
    component: ObservationsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'medication-requests',
    component: MedicationRequestsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'labs',
    component: LabsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'imaging-studies',
    component: ImagingStudiesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
