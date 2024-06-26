import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CarrelloMiniComponent } from './components/carrello-mini/carrello-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent,
    HeaderComponent,
    RatingComponent,
    CarrelloComponent,
    CarrelloMiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
