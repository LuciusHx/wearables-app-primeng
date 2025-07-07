// product.model.ts

export interface Size {
  id: string;
  label: string;
}

export interface ProductSize {
  stock: number;
  size: Size;
}

export interface User {
  name: string;
  avatarUrl: string | null;
}

export interface Category {
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  productImage: string;
  price: number;
  discount: number;
  categoryId: string;
  registredById: string;
  updatedById: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  category: Category;
  sizes: ProductSize[];
  registredBy: User;
}