import { iCategoryService } from "../contracts/iCategoryService";
import { Result } from "../infra/Result";
import { CategoryRepository } from "../repository/CategoryRepository";

export class CategoryService implements iCategoryService {
  async get(_id: string) {
    const result = await CategoryRepository.findById(_id);
    return result;
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
    const result = await CategoryRepository.find({});
    return result;
  }

  async registerCategory(category: string) {
    const result = await CategoryRepository.create({
      category: category,
    });
    return result;
  }

  async deleteCategory(id: string) {
    const result = await CategoryRepository.findByIdAndDelete(id);
    return result;
  }

  async updateCategory(id: string, category: string) {
    await CategoryRepository.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          category: category,
        },
      }
    );
    return { status: "success" };
  }
}

export default new CategoryService();
