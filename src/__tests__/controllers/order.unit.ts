import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "./utils/controllers.factory";
import OrderController from "../../controllers/OrderController";
import OrderService from "../../services/OrderService";

jest.mock("../../services/OrderService");

describe("Order tests", () => {
  it("get all orders with limit pages", async () => {
    const res = resConfig();
    const req = {
      params: {
        page: 1,
        qtd: 10,
      },
    };
    documentReturn(OrderService.getAllWithLimit);
    await OrderController.get(req, res);
    reqErrorTest(OrderService.getAllWithLimit);
    await OrderController.get(req, res);
    expect(OrderService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
    commonExpectsReturn(res, OrderService.getAllWithLimit);
  });

  it("get all orders", async () => {
    const res = resConfig();

    documentReturn(OrderService.getAll);
    await OrderController.getAll({}, res);
    reqErrorTest(OrderService.getAll);
    await OrderController.getAll({}, res);
    commonExpectsReturn(res, OrderService.getAll);
  });

  it("get an order by id", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "id_fake",
      },
    };
    documentReturn(OrderService.get);
    await OrderController.getById(req, res);
    reqErrorTest(OrderService.get);
    await OrderController.getById(req, res);
    commonExpectsReturn(res, OrderService.get);
    expect(OrderService.get).toHaveBeenCalledWith(req.params.id);

  });
});
