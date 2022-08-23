import { iProductsService } from "../contracts/iProductsService";
import { Result } from "../infra/Result";
import { ProductsRepository } from "../repository/ProductsRepository";

export class ProductsService implements iProductsService {
  async get(_id: string) {
    let result = await ProductsRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    let result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await ProductsRepository.count({});
    result.Data = await ProductsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    let result = await ProductsRepository.find({});
    return result;
  }
}
