import { Result } from "../infra/Result";

export interface iCartService {
  get(id: string): any;

  getAll();
  
  getAllWithLimit(qtd: number, page: number): Promise<Result>;

  deleteProductCart(_id: string): any;

  registerProductCart(
    user_id: string,
    quantity: string,
    product_id: string,
    product: string,
    unit_price: string,
    total_price: string,
    order_id: string,
    status: string
  );

  updateProductCart(
    id: string,
    user_id: string,
    quantity: string,
    product_id: string,
    product: string,
    unit_price: string,
    total_price: string,
    status: string
  );
}
