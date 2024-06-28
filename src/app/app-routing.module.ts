import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ProdottiVetrinaComponent
  },
  {
    path: "contatti",
    component: ContattiComponent
  },
  {
    path: "chi-siamo",
    component: ChiSiamoComponent
  },
  {
    path: "dettaglio/:id",
    component: ProdottoDetailComponent
  },
  {
    path: "articoli",
    component: PostsListComponent
  },
  {
    path: "articoli/:postId",
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
