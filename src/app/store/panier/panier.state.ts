export interface PanierItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface PanierState {
  items: PanierItem[];
  total: number;
}
