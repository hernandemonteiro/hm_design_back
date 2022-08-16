import { Result } from "../infra/Result";

export interface iUsersService {

    get(id: string): any;

    getAll(qtd: number, page: number ): Promise<Result>;

}