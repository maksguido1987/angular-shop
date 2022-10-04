export interface Products {
  products: Product[];
}

export interface Product {
  id?: number;
  title: string;
  price: number;
  year: string;
  image?: string;
  configure: Configure;
}

export interface Configure {
  chip: string;
  SSD: string;
  memory: string;
  display: string;
}
