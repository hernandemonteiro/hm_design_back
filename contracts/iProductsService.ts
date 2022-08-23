import { Result } from "../infra/Result";

export interface iProductsService {

    get(id: string): any;

    getAllWithLimit(qtd: number, page: number ): Promise<Result>;

}