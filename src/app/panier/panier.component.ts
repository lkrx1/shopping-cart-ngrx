import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PanierItem, PanierState } from '../store/panier/panier.state';
import { AsyncPipe } from '@angular/common';
import {
  selectPanierItems,
  selectPanierTotal,
} from '../store/panier/panier.selectors';
import { clearPanier, removeItem } from '../store/panier/panier.actions';

@Component({
  selector: 'app-panier',
  imports: [AsyncPipe],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss',
})
export class PanierComponent {
  items$: Observable<PanierItem[]>;
  total$: Observable<number>;

  constructor(private store: Store<PanierState>) {
    this.items$ = this.store.select(selectPanierItems);
    this.total$ = this.store.select(selectPanierTotal);
  }

  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }));
  }

  clearCart() {
    this.store.dispatch(clearPanier());
  }
}
