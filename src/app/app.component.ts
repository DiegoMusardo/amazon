import { Component } from '@angular/core';
import { Rating } from './models/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon';

  ratingMioSito: Rating = {
    count: 799, rate: 5
  }
}
