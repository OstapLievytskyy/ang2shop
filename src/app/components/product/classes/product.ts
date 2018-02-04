import { CategoryEnum } from '../classes';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  imgPath: string;
  isAvailable: boolean;
  ingredients: string[];
  equivalents: string[];
}
