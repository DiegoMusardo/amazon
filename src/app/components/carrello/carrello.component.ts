import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  constructor(public prodottiservice: ProdottiService) {

  }
}
