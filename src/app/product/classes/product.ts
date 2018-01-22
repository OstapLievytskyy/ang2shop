import { categoryEnum } from '../classes/categotyEnum';

export class Product {
  name: string;
  description: string;
  price: number;
  category: categoryEnum;
  imgPath: string;
  isAvailable: boolean;
}
