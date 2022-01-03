import {
  WeatherViewComponentComponent,
  ShowDataComponentComponent,
  FormComponentComponent,
} from './index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FormComponentComponent,
    ShowDataComponentComponent,
    WeatherViewComponentComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [WeatherViewComponentComponent],
})
export class WeatherViewModuleModule {}
