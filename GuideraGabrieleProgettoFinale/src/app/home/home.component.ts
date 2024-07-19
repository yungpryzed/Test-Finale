import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {AboutUsComponent} from "../about-us/about-us.component";
import {RouterModule} from "@angular/router";
import {CarouselComponent} from "../carousel/carousel.component";
import {MeteocardComponent} from "../meteocard/meteocard.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MeteoService} from "../../service/meteo-service.service";
import {SearchbarComponent} from "../searchbar/searchbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    RouterModule,
    CarouselComponent,
    MeteocardComponent,
    FormsModule,
    NgIf,
    NgForOf,
    SearchbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
