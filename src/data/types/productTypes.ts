export interface ProductCardType {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  oldPrice?: number;
}

export interface HeadPhoneType {
  name: string;
  data: ProductCardType[];
}
