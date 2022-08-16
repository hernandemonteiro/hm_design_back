import { Result } from "../infra/Result";

export interface iProductsService {

    get(id: string): any;

    getAll(qtd: number, page: number ): Promise<Result>;

}