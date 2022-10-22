import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../helpers/utilsUnit";
import CartController from "../../controllers/CartController";
import CartService from "../../services/CartService";

jest.mock("../../services/CartService");
describe("Cart tests for Controllers", () => {
  it("Get all products limited by pages", async () => {
    const res = resConfig();
    const req = {
      params: {
        page: 1,
        qtd: 10,
      },
    };
    documentReturn(CartService.getAllWithLimit);
    await CartController.get(req, res);
    reqErrorTest(CartService.getAllWithLimit);
    await CartController.get(req, res);
    commonExpectsReturn(res, CartService.getAllWithLimit);
    expect(CartService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
  });

  it("Get all products", async () => {
    const res = resConfig();
    const req = {};
    documentReturn(CartService.getAll);
    await CartController.getAll(req, res);
    reqErrorTest(CartService.getAll);
    await CartController.getAll(req, res);
    commonExpectsReturn(res, CartService.getAll);
    expect(CartService.getAll).toHaveBeenCalledWith();
  });

  it("Get product by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_test",
      },
    };
    documentReturn(CartService.get);
    await CartController.getById(req, res);
    reqErrorTest(CartService.get);
    await CartController.getById(req, res);
    commonExpectsReturn(res, CartService.get);
    expect(CartService.get).toHaveBeenCalledWith(req.params.id);
  });

  it("delete product by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_test",
      },
    };
    documentReturn(CartService.deleteProductCart);
    await CartController.deleteProductCart(req, res);
    reqErrorTest(CartService.deleteProductCart);
    await CartController.deleteProductCart(req, res);
    commonExpectsReturn(res, CartService.deleteProductCart);
    expect(CartService.deleteProductCart).toHaveBeenCalledWith(req.params.id);
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
    documentReturn(CartService.registerProductCart);
    await CartController.registerProductCart(req, res);
    reqErrorTest(CartService.registerProductCart);
    await CartController.registerProductCart(req, res);
    commonExpectsReturn(res, CartService.registerProductCart);
  });

  it("update a product", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id",
        user_id: "user_id",
        quantity: "1",
        product_id: "product_id",
        product: "Product test",
        unit_price: "1.00",
        total_price: "1.00",
        status: "test coverage",
      },
    };
    documentReturn(CartService.updateProductCart);
    await CartController.updateProductCart(req, res);
    reqErrorTest(CartService.updateProductCart);
    await CartController.updateProductCart(req, res);
    commonExpectsReturn(res, CartService.updateProductCart);
  });
});
