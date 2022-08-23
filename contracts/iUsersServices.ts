import { Result } from "../infra/Result";

export interface iUsersService {
  get(id: string): any;

  getAllWithLimit(qtd: number, page: number): Promise<Result>;
}
