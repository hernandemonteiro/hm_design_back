import { Result } from "../infra/Result";

export interface iOrderService {
  get(id: string): any;

  getAllWithLimit(qtd: number, page: number): Promise<Result>;

  registerOrder(
    user_id: string,
    address: string,
    order_id: string,
    status: string
  );

  deleteOrder(id: string);

  updateOrder(
    id: string,
    user_id: string,
    address: string,
    order_id: string,
    status: string
  );
}
