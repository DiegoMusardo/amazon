import { Injectable } from '@angular/core';
// import { PRODOTTI } from "../data/prodotti";
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) {

  }

  prodottiACarrello: Prodotto[] = [];

  // generics = il modo per passare un tipo come parametro

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("https://fakestoreapi.com/products");
      
    // return PRODOTTI as Prodotto[];
  }

  getProdottoById(id: string): Observable<Prodotto> {
    return this.http.get<Prodotto>("https://fakestoreapi.com/products/" + id);  
      
    // return PRODOTTI as Prodotto[];
  }

  getCategories() {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories");
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
