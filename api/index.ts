import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const productsApi = {
  getAll() {
    return instance.get<Product[]>("/products");
  },
};

// types
export type Rating = {
  rate: number;
  count: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}