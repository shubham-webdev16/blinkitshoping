export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
