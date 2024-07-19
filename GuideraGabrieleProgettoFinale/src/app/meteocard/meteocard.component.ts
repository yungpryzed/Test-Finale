import { Component, Input, OnInit } from '@angular/core';
import { MeteoService } from "../../service/meteo-service.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-meteocard',
  standalone: true,
  templateUrl: './meteocard.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./meteocard.component.css']
})
export class MeteocardComponent implements OnInit {

  @Input() cityName: string = "";
  @Input() temperature: number | undefined;
  city: string | undefined;

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    if (!this.temperature) {
      this.loadWeather();
    } else {
      this.city = this.cityName;
    }
  }

  private loadWeather(): void {
    this.meteoService.getCoordinates(this.cityName).subscribe((coords: any) => {
      const lat = coords.results[0].latitude;
      const lon = coords.results[0].longitude;

      this.meteoService.getWeather(lat, lon).subscribe((weather: any) => {
        this.temperature = weather.current_weather.temperature;
      });

      this.meteoService.getCityName(lat, lon).subscribe((location: any) => {
        this.city = location.address.city || location.address.town || location.address.village;
      });
    });
  }

  protected saveWeather(): void {
    console.log("saveWeather called");
    if (this.city && this.temperature !== undefined) {
      const meteo = {
        citta: this.city,
        temperatura: this.temperature
      };
      this.meteoService.addWeather(meteo).subscribe({
        next: response => {
          console.log("Meteo aggiunto correttamente:", response);
        },
        error: err => {
          console.error("Errore nell'aggiungere il meteo", err);
        }
      });
    } else {
      console.warn("Città o temperatura non settati");
    }
  }
}
