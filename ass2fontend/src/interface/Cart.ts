export interface Cart {
  _id?: number | string;
  quantity: number;
  title: string;
  price: number;
  description: string;
  thumbnail?: string;
}
