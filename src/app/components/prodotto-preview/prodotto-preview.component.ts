import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-prodotto-preview',
  templateUrl: './prodotto-preview.component.html',
  styleUrl: './prodotto-preview.component.css'
})
export class ProdottoPreviewComponent {
  @Input()
  prodotto?: Prodotto;

  constructor(public ps: ProdottiService) {

  }
}
