import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from '../store/panier/panier.actions';
import { Produit } from '../store/produit/produit.state';

@Component({
  selector: 'app-liste-produits',
  imports: [],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.scss',
})
export class ListeProduitsComponent {
  products: Produit[] = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
    { id: 3, name: 'Produit 3', price: 30 },
  ];

  constructor(private store: Store) {}

  addToCart(product: Produit) {
    this.store.dispatch(
      addItem({
        item: {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      })
    );
  }
}
