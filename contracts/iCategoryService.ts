import { Result } from "../infra/Result";

export interface iCategoryService {
  get(id: string): any;

  getAllWithLimit(qtd: number, page: number): Promise<Result>;

  registerCategory(category: string);

  deleteCategory(id: string);

  updateCategory(id: string, category: string);
}
