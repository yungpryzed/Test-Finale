import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MeteoService {

  OPEN_METEO = 'https://api.open-meteo.com/v1/forecast';
  GEO_CODING = 'https://geocoding-api.open-meteo.com/v1/search';
  NOMINATIM = 'https://nominatim.openstreetmap.org/reverse';
  AGGIUNGI = 'http://localhost:8080/api/meteo';

  constructor(private http: HttpClient) { }


  getCoordinates(city: string): Observable<any> {
    const url = `${this.GEO_CODING}?name=${encodeURIComponent(city)}`;
    return this.http.get(url);
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.OPEN_METEO}?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return this.http.get(url);
  }

  getCityName(lat: number, lon: number): Observable<any> {
    const url = `${this.NOMINATIM}?lat=${lat}&lon=${lon}&format=json`;
    return this.http.get(url);
  }

  addWeather(meteo: { citta: string; temperatura: number }): Observable<any> {
    return this.http.post<any>(`${this.AGGIUNGI}/aggiungi`, meteo);
  }
}
