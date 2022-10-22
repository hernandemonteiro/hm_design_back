import { Result } from "../infra/Result";

export interface iCartService {
  get(id: string);

  getAll();

  getAllWithLimit(qtd: number, page: number): Promise<Result | object>;

  deleteProductCart(_id: string);

  registerProductCart(product: object);

  updateProductCart(product: object);
}
