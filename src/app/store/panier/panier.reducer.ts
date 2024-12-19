// src/app/store/cart/cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearPanier } from './panier.actions';
import { PanierState } from './panier.state';

export const initialState: PanierState = {
  items: [],
  total: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        total: state.total + item.price,
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
        total: state.total + item.price,
      };
    }
  }),
  on(removeItem, (state, { id }) => {
    const itemToRemove = state.items.find((i) => i.id === id);
    if (itemToRemove) {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
        total: state.total - itemToRemove.price * itemToRemove.quantity,
      };
    }
    return state;
  }),
  on(clearPanier, () => initialState)
);
