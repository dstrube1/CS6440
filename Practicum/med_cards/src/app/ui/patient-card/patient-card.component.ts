import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  constructor(private router: Router) { }

    @Input() patient: Patient;
    @Input() link: string;

  ngOnInit(): void {
  }

  route(link: string): void {
    this.router.navigate(['profile/' + this.patient.id]);
  }
}
