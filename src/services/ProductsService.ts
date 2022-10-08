import { iProductsService } from "../contracts/iProductsService";
import { Result } from "../infra/Result";
import { ProductsRepository } from "../repository/ProductsRepository";

export class ProductsService implements iProductsService {
  async get(_id: string) {
    const result = await ProductsRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    const result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await ProductsRepository.count({});
    result.Data = await ProductsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    const result = await ProductsRepository.find({});
    return result;
  }

  async getPerCategory(category: string) {
    const result = await ProductsRepository.find({ category: category });
    return result;
  }

  async getPerSearch(search: string) {
    const result = await ProductsRepository.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });
    return result;
  }

  async deleteProduct(id: string) {
    const result = await ProductsRepository.findByIdAndDelete(id);
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
    const result = await new ProductsRepository({
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
    category: string,
    status: string,
    options: string
  ) {
    await ProductsRepository.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          price: price,
          images: images,
          description: description,
          category: category,
          status: status,
          options: options,
        },
      }
    );
    return { status: "success" };
  }
}

export default new ProductsService();
