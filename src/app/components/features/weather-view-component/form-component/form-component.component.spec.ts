import { PrepareDataService } from 'src/app/core/data/prepare-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponentComponent } from './form-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, Validators } from '@angular/forms';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;
  let prepareDataService: PrepareDataService;
  let fb: FormBuilder

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponentComponent],
      providers: [
        { provide: PrepareDataService },
        { provide: FormBuilder}
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    prepareDataService = TestBed.inject(PrepareDataService);
    fb = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchWeather - Check if getByCityCountry is called with values', () => {
    component.formGroup = fb.group({
      city: ['sp', Validators.required],
      country: ['br', Validators.required],
    });

    const spy = spyOn(prepareDataService, 'getByCityCountry').and.callThrough();

    component.searchWeather();

    expect(spy).toHaveBeenCalledOnceWith('sp', 'br');

    expect(component.formGroup.get('city')?.value).toEqual('');
    expect(component.formGroup.get('country')?.value).toEqual('');
  });
});
