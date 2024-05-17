
import * as FHIR from 'fhirclient';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export class Client {

  client: any;
  patient: any;


  constructor(private http: HttpClient) {
  }

  get(): Promise<any> {
    if (!this.patient) {
      return new Promise((resolve, reject) => {
        FHIR.oauth2.init({
          clientId: 'Input client id you get when you register the app',
          scope: 'launch/patient openid profile'
        }).then(client => {
          client.request(`Patient/${client.patient.id}`)
            .then(patient => {
              this.patient = patient;
              resolve(this.patient);
            }, e => {
              reject(e);
            });
        })
          .catch(e => reject(e));
      });
    } else {
      return new Promise<any>((resolve, reject) => {
        resolve(this.patient);
      });
    }
  }
}
