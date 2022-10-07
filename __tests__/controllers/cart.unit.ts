import { describe, it, jest } from "@jest/globals";
import { resConfig } from "./utils";
import CartController from "../../controllers/CartController";
import CartService from "../../services/CartService";

jest.mock("../../services/CartService");
describe("Cart tests for Controllers", () => {
  it("Get all products limited by pages", () => {
    const resSuccess = resConfig("get success");
    const reqSuccess = {
      params: {
        page: 1,
        qtd: 10,
      },
    };
    jest.mocked(CartService.getAllWithLimit).mockResolvedValueOnce(null);
    CartController.get(reqSuccess, resSuccess);
    const resFailure = resConfig("get failure");
    const reqFailure = {};
    CartController.get(reqFailure, resFailure);
  });
  it("Get all products", () => {
    const resSuccess = resConfig("getAll success");
    const resFailure = resConfig("getAll failure");
    const req = {};
    jest.mocked(CartService.getAll).mockResolvedValueOnce(null);
    CartController.getAll(req, resSuccess);
    jest.mocked(CartService.getAll).mockImplementation(() => {
      throw new Error("Error Match");
    });
    CartController.getAll(req, resFailure);
  });

  it("Get product by id", () => {
    const resSuccess = resConfig("getByID success");
    const reqSuccess = {
      params: {
        id: "id_test",
      },
    };
    jest.mocked(CartService.get).mockResolvedValueOnce(null);
    CartController.getById(reqSuccess, resSuccess);
    const resFailure = resConfig("getByID failure");
    const reqFailure = {};
    CartController.getById(reqFailure, resFailure);
  });
  it("delete product by id", () => {
    const resSuccess = resConfig("deleteProductCart success");
    const reqSuccess = {
      params: {
        id: "id_test",
      },
    };
    jest.mocked(CartService.deleteProductCart).mockResolvedValueOnce(null);
    CartController.deleteProductCart(reqSuccess, resSuccess);
    const resFailure = resConfig("deleteProductCart failure");
    const reqFailure = {};
    CartController.deleteProductCart(reqFailure, resFailure);
  });
  it("registering an product", () => {
    const resSuccess = resConfig("registerProductCart success");
    const reqSuccess = {
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
    jest.mocked(CartService.registerProductCart).mockResolvedValueOnce(null);
    CartController.registerProductCart(reqSuccess, resSuccess);
    const resFailure = resConfig("registerProductCart failure");
    const reqFailure = {};
    CartController.registerProductCart(reqFailure, resFailure);
  });
  it("registering an product", () => {
    const resSuccess = resConfig("updateProductCart success");
    const reqSuccess = {
      params: {
        id: "id",
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
    jest.mocked(CartService.updateProductCart).mockResolvedValueOnce(null);
    CartController.updateProductCart(reqSuccess, resSuccess);
    const resFailure = resConfig("updateProductCart failure");
    const reqFailure = {};
    CartController.updateProductCart(reqFailure, resFailure);
  });
});
