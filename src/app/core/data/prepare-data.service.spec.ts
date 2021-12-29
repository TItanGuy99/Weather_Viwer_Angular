import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../http/http.service';
import { PrepareDataService } from './prepare-data.service';
import { of, throwError } from 'rxjs';

describe('PrepareDataServiceService', () => {
  let service: PrepareDataService;
  let httpService: HttpService;

  let response = {
    coord: {
      lon: -142,
      lat: -78,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    base: 'stations',
    main: {
      temp: 257.91,
      feels_like: 250.91,
      temp_min: 257.91,
      temp_max: 257.91,
      pressure: 966,
      humidity: 71,
      sea_level: 966,
      grnd_level: 845,
    },
    visibility: 10000,
    wind: {
      speed: 4.14,
      deg: 96,
      gust: 4.71,
    },
    clouds: {
      all: 14,
    },
    dt: 1635378036,
    sys: {
      sunrise: 0,
      sunset: 0,
    },
    timezone: -32400,
    id: 0,
    name: '',
    cod: 200,
  };

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
