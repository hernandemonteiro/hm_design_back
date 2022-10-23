import { Result } from "../infra/Result";

export interface iCartService {
  get(id: string);

  getAll();

  getWithPagination(qtd: number, page: number): Promise<Result | object>;

  deleteProductOfCart(_id: string);

  insertProductInCart(product: object);

  updateProductCart(product: object);
}
