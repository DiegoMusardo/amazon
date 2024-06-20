import { Injectable } from '@angular/core';
import { PRODOTTI } from "../data/prodotti";
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodottiACarrello: Prodotto[] = [];

  getProdotti() {
    return PRODOTTI as Prodotto[];
  }

  aggiungiACarrello(prodotto: Prodotto) {
    if(!this.prodottiACarrello.find(p => p.id == prodotto.id)){
      this.prodottiACarrello.push(prodotto);
    }
  }

  rimuoviDaCarrello(id: number) {
    const p = this.prodottiACarrello.find(p => p.id == id);

    if(p) {
      const i = this.prodottiACarrello.indexOf(p);
      this.prodottiACarrello.splice(i,1); 
    }
  }
}
