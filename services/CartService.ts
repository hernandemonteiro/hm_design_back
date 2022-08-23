import { iCartService } from "../contracts/iCartService";
import { Result } from "../infra/Result";
import { CartRepository } from "../repository/CartRepository";

export class CartService implements iCartService {


    async get(_id: string) {

        let result = await CartRepository.findById(_id);
        return result;

    }

    async getAllWithLimit(page: number, qtd: number): Promise<Result> {

        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await CartRepository.count({});
        result.Data = await CartRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;

    }

    async getAll() {

        let result = await CartRepository.find({});
        return result;

    }
}