import {Category} from "./category.interface";

export interface ProductRawData {
  id: number;
  name: string;
  price: number;
}


export interface Product {
  id: number;
  name: string;
  price: number;
  category?: Category | null;
}
