export interface WeatherData {
  name: string;
  weather: any;
  main: Main;
  coord: Coord;
}

export interface Weather {
  icon: string;
}
export interface Coord {
  lat: number;
  lon: number;
}
export interface Main {
  feels_like: number;
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface FormValues {
  country: string;
  city: string;
}
