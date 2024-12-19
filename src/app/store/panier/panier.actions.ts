import { createAction, props } from '@ngrx/store';
import { PanierItem } from './panier.state';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: PanierItem }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ id: number }>()
);

export const clearPanier = createAction('[Cart] Clear Panier');
