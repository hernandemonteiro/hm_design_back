import { describe, it, jest } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
} from "../../utils/factory";
import CategoryService from "../../../services/CategoryService";
import { CategoryRepository } from "../../../repository/CategoryRepository";

jest.mock("../../../repository/CategoryRepository");

describe("Category services test", () => {
  it("get a category by ID", async () => {
    documentReturn(CategoryRepository.findById);
    const getByid = await CategoryService.get("id");
    commonExpectsServicesReturn(getByid);
  });

  //   getallwithlimit implements;

  it("get all categorys", async () => {
    documentReturn(CategoryRepository.find);
    const allCategorys = await CategoryService.getAll();
    commonExpectsServicesReturn(allCategorys);
  });

  it("register an category", async () => {
    documentReturn(CategoryRepository.create);
    const insertCategory = await CategoryService.registerCategory("category");
    commonExpectsServicesReturn(insertCategory);
  });

  it("delete category", async () => {
    documentReturn(CategoryRepository.findByIdAndDelete);
    const deleteCategory = await CategoryService.deleteCategory("id");
    commonExpectsServicesReturn(deleteCategory);
  });

  it("update category", async () => {
    documentReturn(CategoryRepository.findByIdAndUpdate);
    const updatedCategory = await CategoryService.updateCategory(
      "id",
      "category"
    );
    commonExpectsServicesReturn(updatedCategory);
  });
});
