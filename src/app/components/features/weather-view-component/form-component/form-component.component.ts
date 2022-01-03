import { FormValues } from './../../../../core/data/data.model';
import { Component } from '@angular/core';
import { PrepareDataService } from 'src/app/core/data/prepare-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent {
  formValues: FormValues = {
    country: '',
    city: '',
  };

  formGroup: FormGroup;

  constructor(
    private prepareDataService: PrepareDataService,
    public fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  searchWeather(): void {
    /* As soon I send the data, I clean the fields on the form */
    this.prepareDataService.getByCityCountry(
      this.formGroup.get('city')?.value,
      this.formGroup.get('country')?.value
    );

    this.formGroup.get('city')?.setValue('');
    this.formGroup.get('country')?.setValue('');
  }
}
