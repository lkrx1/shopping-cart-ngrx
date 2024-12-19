// src/app/store/cart/cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PanierState } from './panier.state';

export const selectPanierState = createFeatureSelector<PanierState>('cart');

export const selectPanierItems = createSelector(
  selectPanierState,
  (state: PanierState) => state.items
);

export const selectPanierTotal = createSelector(
  selectPanierState,
  (state: PanierState) => state.total
);
