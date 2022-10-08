import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "./controllers.utils";
import CategoryController from "../../controllers/CategoryController";
import CategoryService from "../../services/CategoryService";

jest.mock("../../services/CategoryService");

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
    expect(CategoryService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
    commonExpectsReturn(res, CategoryService.getAllWithLimit);
  });

  it("Get all categorys", async () => {
    const res = resConfig();
    const req = {};
    documentReturn(CategoryService.getAll);
    await CategoryController.getAll(req, res);
    reqErrorTest(CategoryService.getAll);
    await CategoryController.getAll(req, res);
    commonExpectsReturn(res, CategoryService.getAll);
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
  });

  it("register a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        user_id: "user_id",
        quantity: "1",
        product_id: "product_id",
        product: "Product test",
        unit_price: "1.00",
        total_price: "1.00",
        order_id: "order_id",
        status: "test coverage",
      },
    };
    documentReturn(CategoryService.registerCategory);
    await CategoryController.registerCategory(req, res);
    reqErrorTest(CategoryService.registerCategory);
    await CategoryController.registerCategory(req, res);
    commonExpectsReturn(res, CategoryService.registerCategory);
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
    expect(CategoryService.updateCategory).toHaveBeenCalledWith(
      req.params.id,
      req.params.category
    );
    expect(CategoryService.getAllWithLimit).toHaveBeenCalledTimes(2);
    commonExpectsReturn(res, CategoryService.updateCategory);
  });
});
