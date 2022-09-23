import { Result } from "../infra/Result";

export interface iProductsService {
  get(id: string): any;

  getAllWithLimit(qtd: number, page: number): Promise<Result>;

  deleteProduct(id: string);

  registerProduct(
    name: string,
    price: string,
    images: string,
    description: string,
    category: string,
    status: string,
    options: string
  );

  updateProduct(
    id: string,
    name: string,
    price: string,
    images: string,
    description: string,
    status: string,
    options: string
  );

  getPerCategory(category: string);
}
