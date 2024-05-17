import {Injectable} from '@angular/core';
import {Condition} from '../model/condition';
import {Observation} from '../model/observation';
import {Patient} from '../model/patient';
import {Medication} from '../model/medication';
import {MedicationRequest} from '../model/medication-request';
import {ImagingStudy} from '../model/imaging-study';
import {ClinicalImpression} from '../model/clinical-impression';

@Injectable({
  providedIn: 'root'
})
export class PatientParserService {

  constructor() { }

  getPatients(jsonPayload): Patient[] {
    const start = jsonPayload;
    const patients: Patient[] = [];
    for (const i of start.entry) {
      const p = new Patient();
      p.id = i.resource.id;
      p.firstName = i.resource.name[0].given[0];
      p.lastName = i.resource.name[0].family;
      p.gender = i.resource.gender;
      p.birthDate = i.resource.birthDate;
      patients.push(p);
    }
    return patients;
  }

  getObservations(jsonPayload: any): any {
    const start = jsonPayload;
    const result: Observation[] = [];
    for (const i of start.entry) {
      const o = new Observation();
      o.id = i.resource.id;
      o.text = i.resource.code.text;
      o.date = i.resource.issued;
      o.quantitativeValue = i.resource.valueQuantity && i.resource.valueQuantity.value ? i.resource.valueQuantity.value : undefined;
      o.unit = i.resource.valueQuantity && i.resource.valueQuantity.unit ? i.resource.valueQuantity.unit : undefined;
      result.push(o);
    }
    return result;
  }

  getConditions(jsonPayload: any): Condition[] {
    const start = jsonPayload;
    const result: Condition[] = [];
    for (const i of start.entry) {
      const c = new Condition();
      c.id = i.resource.id;
      for (const s of i.resource.code.coding) {
        c.conditionIds.push(s.code);
      }
      console.log(i.resource);
      if (i.resource.clinicalStatus.coding[0] && i.resource.clinicalStatus.coding[0].code != 'active') {
        c.active = false;
      }
      c.text = i.resource.code.text;
      c.abatementDateTime = i.resource.abatementDateTime;
      result.push(c);
    }
    return result;
  }

  getMedications(jsonPayload: any): Medication[]{
    const start = jsonPayload;
    const result: Medication[] = [];
    for (const i of start.entry) {
      const c = new Medication();
      c.id = i.resource.id;
      c.code = i.resource.code.text;
      result.push(c);
    }
    return result;
  }

  getMedicationRequests(jsonPayload: any): MedicationRequest[]{
    const start = jsonPayload;
    const result: MedicationRequest[] = [];
    for (const i of start.entry) {
      const c = new MedicationRequest();
      c.id = i.resource.id;
      c.text = i.resource.medicationCodeableConcept.text;
      result.push(c);
    }
    return result;
  }

  getImagingStudies(jsonPayload: any): ImagingStudy[]{
    const start = jsonPayload;
    const result: ImagingStudy[] = [];
    for (const i of start.entry) {
      for (const s of i.resource.series) {
        const c = new ImagingStudy();
        c.id = i.resource.id;
        c.description = s.description;
        result.push(c);
      }
    }
    return result;
  }

  getClinicalImpressions(jsonPayload: any): ClinicalImpression[]{
    const start = jsonPayload;
    console.log(start);
    const result: ClinicalImpression[] = [];
    for (const i of start.entry) {
      for (const j of i.resource.investigation) {
        for (const k of j.item) {
          const c = new ClinicalImpression();
          c.id = i.resource.id;
          c.code = k.display;
          result.push(c);
        }
      }
    }
    return result;

  }
}
