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

  async deleteProduct(id: string) {
    let result = await ProductsRepository.findByIdAndDelete(id);
    return result;
  }

  async registerProduct(
    name: string,
    price: string,
    images: string,
    description: string,
    category: string,
    options: string
  ) {
    let result = await new ProductsRepository({
      name: name,
      price: price,
      images: images,
      description: description,
      category: category,
      options: options,
    });
    result.save();
    return result;
  }

  async updateProduct(
    id: string,
    name: string,
    price: string,
    images: string,
    description: string,
    status: string,
    options: string
  ) {
    try {
      const updatedProduct = await ProductsRepository.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: name,
            price: price,
            images: images,
            description: description,
            status: status,
            options: options,
          },
        }
      );
      return { status: "success" };
    } catch (error) {
      return { status: "Error: " + error.toString() };
    }
  }
}
