import { Injectable } from '@angular/core';
import { PRODOTTI } from "../data/prodotti";
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { }

  getProdotti() {
    return PRODOTTI as Prodotto[];
  }
}
