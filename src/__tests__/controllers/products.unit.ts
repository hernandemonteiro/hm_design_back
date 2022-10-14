import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../utils/utils.unit.factory";
import ProductsController from "../../controllers/ProductsController";
import ProductsService from "../../services/ProductsService";

jest.mock("../../services/ProductsService");

describe("Products tests", () => {
  it("get all products with limit pages", async () => {
    const res = resConfig();
    const req = {
      params: {
        page: 1,
        qtd: 10,
      },
    };
    documentReturn(ProductsService.getAllWithLimit);
    await ProductsController.get(req, res);
    reqErrorTest(ProductsService.getAllWithLimit);
    await ProductsController.get(req, res);
    commonExpectsReturn(res, ProductsService.getAllWithLimit);
    expect(ProductsService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
  });

  it("get all products", async () => {
    const res = resConfig();
    const req = {};
    documentReturn(ProductsService.getAll);
    await ProductsController.getAll(req, res);
    reqErrorTest(ProductsService.getAll);
    await ProductsController.getAll(req, res);
    commonExpectsReturn(res, ProductsService.getAllWithLimit);
  });

  it("get a product by ID", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "fake_id",
      },
    };
    documentReturn(ProductsService.get);
    await ProductsController.getById(req, res);
    reqErrorTest(ProductsService.get);
    await ProductsController.getById(req, res);
    commonExpectsReturn(res, ProductsService.get);
    expect(ProductsService.get).toHaveBeenCalledWith(req.params.id);
  });

  it("get products by category", async () => {
    const res = resConfig();
    const req = {
      params: {
        category: "fake_category",
      },
    };
    documentReturn(ProductsService.getPerCategory);
    await ProductsController.getPerCategory(req, res);
    reqErrorTest(ProductsService.getPerCategory);
    await ProductsController.getPerCategory(req, res);
    commonExpectsReturn(res, ProductsService.getPerCategory);
    expect(ProductsService.getPerCategory).toHaveBeenCalledWith(
      req.params.category
    );
  });

  it("get products by search", async () => {
    const res = resConfig();
    const req = {
      params: {
        search: "fake_search",
      },
    };
    documentReturn(ProductsService.getPerSearch);
    await ProductsController.getPerSearch(req, res);
    reqErrorTest(ProductsService.getPerSearch);
    await ProductsController.getPerSearch(req, res);
    commonExpectsReturn(res, ProductsService.getPerSearch);
    expect(ProductsService.getPerSearch).toHaveBeenCalledWith(
      req.params.search
    );
  });

  it("delete a product by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "fake_id",
      },
    };
    documentReturn(ProductsService.deleteProduct);
    await ProductsController.deleteProduct(req, res);
    reqErrorTest(ProductsService.deleteProduct);
    await ProductsController.deleteProduct(req, res);
    commonExpectsReturn(res, ProductsService.deleteProduct);
    expect(ProductsService.deleteProduct).toHaveBeenCalledWith(req.params.id);
  });

  it("register a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        name: "fake_name",
        price: 1.5,
        images: `["img1", "img2"]`,
        description: "description fake",
        category: "category_fake",
        options: `["option 1", "option 2"]`,
      },
    };
    documentReturn(ProductsService.registerProduct);
    await ProductsController.registerProduct(req, res);
    reqErrorTest(ProductsService.registerProduct);
    await ProductsController.registerProduct(req, res);
    commonExpectsReturn(res, ProductsService.registerProduct);
    expect(ProductsService.registerProduct).toHaveBeenCalledWith(
      req.params.name,
      req.params.price,
      req.params.images,
      req.params.description,
      req.params.category,
      req.params.options
    );
  });
  it("update a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "fake_id",
        name: "fake_name",
        price: 1.5,
        description: "description fake",
        images: `["img1", "img2"]`,
        category: "category_fake",
        status: "updated",
        options: `["option 1", "option 2"]`,
      },
    };
    documentReturn(ProductsService.updateProduct);
    await ProductsController.updateProduct(req, res);
    reqErrorTest(ProductsService.updateProduct);
    await ProductsController.updateProduct(req, res);
    commonExpectsReturn(res, ProductsService.updateProduct);
    expect(ProductsService.updateProduct).toHaveBeenCalledWith(
      req.params.id,
      req.params.name,
      req.params.price,
      req.params.description,
      req.params.images,
      req.params.category,
      req.params.status,
      req.params.options
    );
  });
});
