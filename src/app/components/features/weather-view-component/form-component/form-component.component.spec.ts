import { PrepareDataService } from 'src/app/core/data/prepare-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponentComponent } from './form-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;
  let prepareDataService: PrepareDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponentComponent],
      providers: [{ provide: PrepareDataService }],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    prepareDataService = TestBed.inject(PrepareDataService);
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchWeather - Check if getByCityCountry is called with values', () => {
    component.formValues = {
      country: 'br',
      city: 'sp',
    };

    const spy = spyOn(prepareDataService, 'getByCityCountry').and.callThrough();

    component.searchWeather();

    expect(spy).toHaveBeenCalledOnceWith('sp', 'br');

    expect(component.formValues.city).toEqual('');
    expect(component.formValues.country).toEqual('');
  });
});
