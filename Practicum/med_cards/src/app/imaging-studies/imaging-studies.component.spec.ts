import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagingStudiesComponent } from './imaging-studies.component';

describe('ImagingStudiesComponent', () => {
  let component: ImagingStudiesComponent;
  let fixture: ComponentFixture<ImagingStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagingStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagingStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
