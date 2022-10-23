import { describe, it, jest, expect, afterEach } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
  resultPromise,
} from "../helpers/utilsUnit";
import sinon from "sinon";
import CategoryService from "../../services/CategoryService";
import { CategoryRepository } from "../../repository/CategoryRepository";

jest.mock("../../repository/CategoryRepository");

describe("Category services test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("get a category by ID", async () => {
    documentReturn(CategoryRepository.findById);
    const getByid = await CategoryService.get("id");
    commonExpectsServicesReturn(getByid);
  });

  it("get all categorys with limit pages", async () => {
    jest.mocked(CategoryRepository.count).mockResolvedValue(10);
    resultPromise(CategoryRepository);
    const getWithPagination = await CategoryService.getWithPagination(1, 1).then(
      (res) => res.Data
    );
    expect(getWithPagination).toMatchObject({ status: "success" });
    sinon.restore();
    expect(CategoryRepository.count).toHaveBeenCalledTimes(1);
  });

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
    documentReturn(CategoryRepository.findOneAndUpdate);
    const updatedCategory = await CategoryService.updateCategory(
      "id",
      "category"
    );
    commonExpectsServicesReturn(updatedCategory);
  });
});
