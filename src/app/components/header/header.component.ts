import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  categorie: string[] = [];

  constructor(private ps: ProdottiService) {}
  // ps = inject(ProdottiService); NUOVO METODO

  ngOnInit(): void {
    this.ps.getCategories().subscribe(cats => {
      this.categorie = cats;
    })
  }
}
