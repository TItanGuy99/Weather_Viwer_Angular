import { FormValues } from './../../../../core/data/data.model';
import { Component } from '@angular/core';
import { PrepareDataService } from 'src/app/core/data/prepare-data.service';

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

  constructor(private prepareDataService: PrepareDataService) {}

  searchWeather(): void {
    /* As soon I send the data, I clean the fields on the form */
    this.prepareDataService.getByCityCountry(
      this.formValues.city,
      this.formValues.country
    );
    this.formValues.country = '';
    this.formValues.city = '';
  }
}
