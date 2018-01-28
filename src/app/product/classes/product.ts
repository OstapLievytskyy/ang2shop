import { categoryEnum } from '../classes/categotyEnum';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: categoryEnum;
  imgPath: string;
  isAvailable: boolean;
  ingredients: string[];
  equivalents: string[];
}
