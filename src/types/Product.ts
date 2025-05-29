
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'console' | 'accessory';
  images: string[];
  colors: string[];
  sizes: string[];
  specifications: { [key: string]: string };
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  variant: {
    color: string;
    size: string;
  };
  quantity: number;
}
