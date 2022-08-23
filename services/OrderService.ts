import { iOrderService } from "../contracts/iOrderService";
import { Result } from "../infra/Result";
import { OrderRepository } from "../repository/OrderRepository";

export class OrderService implements iOrderService {


    async get(_id: string) {

        let result = await OrderRepository.findById(_id);
        return result;

    }

    async getAllWithLimit(page: number, qtd: number): Promise<Result> {

        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await OrderRepository.count({});
        result.Data = await OrderRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;

    }

    async getAll() {

        let result = await OrderRepository.find({});
        return result;

    }
}