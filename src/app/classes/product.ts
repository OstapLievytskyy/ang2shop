import { Identifier, CategoryEnum } from './';

export class Product implements Identifier {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  imgPath: string;
  isAvailable: boolean;
  ingredients: string[];
  equivalents: string[];
}
