import { iCategoryService } from "../contracts/iCategoryService";
import { Result } from "../infra/Result";
import { CategoryRepository } from "../repository/CategoryRepository";

export class CategoryService implements iCategoryService {
  async get(_id: string) {
    return await CategoryRepository.findById(_id);
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    const result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await CategoryRepository.count({});
    result.Data = await CategoryRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    return await CategoryRepository.find({});
  }

  async registerCategory(category: string) {
    return await CategoryRepository.create({
      category: category,
    });
  }

  async deleteCategory(id: string) {
    return await CategoryRepository.findByIdAndDelete(id);
  }

  async updateCategory(id: string, category: string) {
    return await CategoryRepository.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          category: category,
        },
      }
    );
  }
}

export default new CategoryService();
