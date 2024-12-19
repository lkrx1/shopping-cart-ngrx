export interface Produit {
  id: number;
  name: string;
  price: number;
}

export interface ProduitState {
  products: Produit[];
}
