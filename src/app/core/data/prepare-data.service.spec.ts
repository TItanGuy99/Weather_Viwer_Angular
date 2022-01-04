import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../http/http.service';
import { PrepareDataService } from './prepare-data.service';
import { of, throwError } from 'rxjs';

describe('PrepareDataServiceService', () => {
  let service: PrepareDataService;
  let httpService: HttpService;

  let response = {
    'name': 'São Paulo',
    'icon': '50n',
    'feels_like': 22.77,
    'humidity': 91,
    'temp': 22.13,
    'temp_max': 22.47,
    'temp_min': 21.75,
    'lat': -23.5475,
    'lon': -46.6361
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpService }],
      imports: [HttpClientTestingModule],
    });
    httpService = TestBed.inject(HttpService);
    service = TestBed.inject(PrepareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getByCoordinates calls', () => {
    it('getByCoordinates should call httpService.get and return success', () => {
      const spy = spyOn(httpService, 'get').and.returnValue(of(response));
      service.getByCoordinates(-78, -142);

      expect(service.loading).toBeFalse();
      expect(service.noData).toBeFalse();
      expect(service.saveResponse).toBe(response);
    });

    it('getByCoordinates should call httpService.get and return error', () => {
      const spy = spyOn(httpService, 'get').and.returnValue(
        throwError(() => 'ERROR')
      );
      service.getByCoordinates(-78, -142);

      expect(service.loading).toBeFalse();
      expect(service.noData).toBeTrue();
    });
  });

  describe('getByCityCountry calls', () => {
    it('getByCityCountry should call httpService.get and return success', () => {
      const spy = spyOn(httpService, 'get').and.returnValue(of(response));
      service.getByCityCountry('sp', 'br');

      expect(service.loading).toBeFalse();
      expect(service.noData).toBeFalse();
      expect(service.saveResponse).toBe(response);
    });

    it('getByCityCountry should call httpService.get and return error', () => {
      const spy = spyOn(httpService, 'get').and.returnValue(
        throwError(() => 'ERROR')
      );
      service.getByCityCountry('sp', 'br');

      expect(service.loading).toBeFalse();
      expect(service.noData).toBeTrue();
    });
  });
});
