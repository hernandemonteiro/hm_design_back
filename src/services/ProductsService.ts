import { iProductsService } from "../contracts/iProductsService";
import { Result } from "../infra/Result";
import { ProductsRepository } from "../repository/ProductsRepository";

export class ProductsService implements iProductsService {
  async get(_id: string) {
    return await ProductsRepository.findById(_id);
  }

  async getWithPagination(page: number, qtd: number): Promise<Result> {
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
    return await ProductsRepository.find({});
  }

  async getPerCategory(category: string) {
    return await ProductsRepository.find({ category: category });
  }

  async getPerSearch(search: string) {
    return await ProductsRepository.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });
  }

  async deleteProduct(id: string) {
    return await ProductsRepository.findByIdAndDelete(id);
  }

  async registerProduct(
    name: string,
    price: string,
    images: string,
    description: string,
    category: string,
    options: string
  ) {
    return await ProductsRepository.create({
      name: name,
      price: price,
      images: images,
      description: description,
      category: category,
      options: options,
    });
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
