import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-carrello-mini',
  templateUrl: './carrello-mini.component.html',
  styleUrl: './carrello-mini.component.css'
})
export class CarrelloMiniComponent {
  constructor(public ps: ProdottiService) {}

}
