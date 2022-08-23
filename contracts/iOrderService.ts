import { Result } from "../infra/Result";

export interface iOrderService {
  get(id: string): any;

  getAllWithLimit(qtd: number, page: number): Promise<Result>;
}
