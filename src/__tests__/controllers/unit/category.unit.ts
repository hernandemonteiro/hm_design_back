import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../../utils/factory";
import CategoryController from "../../../controllers/CategoryController";
import CategoryService from "../../../services/CategoryService";

jest.mock("../../../services/CategoryService");

describe("Cart tests for Controllers", () => {
  it("Get all categorys limited by pages", async () => {
    const res = resConfig();
    const req = {
      params: {
        page: 1,
        qtd: 10,
      },
    };
    documentReturn(CategoryService.getAllWithLimit);
    await CategoryController.get(req, res);
    reqErrorTest(CategoryService.getAllWithLimit);
    await CategoryController.get(req, res);
    commonExpectsReturn(res, CategoryService.getAllWithLimit);
    expect(CategoryService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
  });

  it("Get all categorys", async () => {
    const res = resConfig();
    const req = {};
    documentReturn(CategoryService.getAll);
    await CategoryController.getAll(req, res);
    reqErrorTest(CategoryService.getAll);
    await CategoryController.getAll(req, res);
    commonExpectsReturn(res, CategoryService.getAll);
    expect(CategoryService.getAll).toHaveBeenCalledWith();
  });

  it("Get product by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_test",
      },
    };
    documentReturn(CategoryService.get);
    await CategoryController.getById(req, res);
    reqErrorTest(CategoryService.get);
    await CategoryController.getById(req, res);
    commonExpectsReturn(res, CategoryService.get);
    expect(CategoryService.get).toHaveBeenCalledWith(req.params.id);
  });

  it("delete category by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_test",
      },
    };
    documentReturn(CategoryService.deleteCategory);
    await CategoryController.deleteCategory(req, res);
    reqErrorTest(CategoryService.deleteCategory);
    await CategoryController.deleteCategory(req, res);
    commonExpectsReturn(res, CategoryService.deleteCategory);
    expect(CategoryService.deleteCategory).toHaveBeenCalledWith(req.params.id);
  });

  it("register a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        category: "category",
      },
    };
    documentReturn(CategoryService.registerCategory);
    await CategoryController.registerCategory(req, res);
    reqErrorTest(CategoryService.registerCategory);
    await CategoryController.registerCategory(req, res);
    commonExpectsReturn(res, CategoryService.registerCategory);
    expect(CategoryService.registerCategory).toHaveBeenCalledWith(
      req.params.category
    );
  });
  it("update a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id",
        category: "category",
      },
    };
    documentReturn(CategoryService.updateCategory);
    await CategoryController.updateCategory(req, res);
    reqErrorTest(CategoryService.updateCategory);
    await CategoryController.updateCategory(req, res);
    commonExpectsReturn(res, CategoryService.updateCategory);
    expect(CategoryService.updateCategory).toHaveBeenCalledWith(
      req.params.id,
      req.params.category
    );
  });
});
