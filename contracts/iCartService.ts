import { Result } from "../infra/Result";

export interface iCartService {

    get(id: string): any;

    getAllWithLimit(qtd: number, page: number ): Promise<Result>;

}