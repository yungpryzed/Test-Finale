import { Component } from '@angular/core';
import { MeteoService } from "../../service/meteo-service.service";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "../carousel/carousel.component";
import { MeteocardComponent } from "../meteocard/meteocard.component";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    FormsModule,
    MeteocardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  cityName: string = "";
  searchTerm: string = "";
  weatherCardVisible: boolean = false;
  weatherData: any;
  randomCities = ['Rome', 'London', 'Paris', 'New York', 'Tokyo', 'Liverpool']; // Example list of random cities

  constructor(private meteoService: MeteoService) { }

  onSearch(city: string) {
    this.cityName = city;
    this.weatherCardVisible = false; // Hide card during loading
    this.meteoService.getCoordinates(city).subscribe((coords: any) => {
      const lat = coords.results[0].latitude;
      const lon = coords.results[0].longitude;

      this.meteoService.getWeather(lat, lon).subscribe((weather: any) => {
        this.weatherData = {
          city: city,
          temperature: weather.current_weather.temperature
        };
        this.weatherCardVisible = true; // Show card
      });
    });
  }
}
