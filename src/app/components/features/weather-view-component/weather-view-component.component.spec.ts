import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherViewComponentComponent } from './weather-view-component.component';

describe('WeatherViewComponentComponent', () => {
  let component: WeatherViewComponentComponent;
  let fixture: ComponentFixture<WeatherViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
