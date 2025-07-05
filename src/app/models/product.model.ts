export interface Product {
  id?: string;
  name: string;
  price: number;
  discount: number;
  category: string;
  registredById: string;
  sizes: Size[];
}

interface Size {
  label: string;
  stock: number;
}
