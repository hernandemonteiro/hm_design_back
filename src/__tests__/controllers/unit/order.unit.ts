import { describe, it, jest, expect } from "@jest/globals";
import {
  resConfig,
  reqErrorTest,
  documentReturn,
  commonExpectsReturn,
} from "../utils/controllers.factory";
import OrderController from "../../../controllers/OrderController";
import OrderService from "../../../services/OrderService";

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
    commonExpectsReturn(res, OrderService.getAllWithLimit);
    expect(OrderService.getAllWithLimit).toHaveBeenCalledWith(
      req.params.page,
      req.params.qtd
    );
  });

  it("get all orders", async () => {
    const res = resConfig();

    documentReturn(OrderService.getAll);
    await OrderController.getAll({}, res);
    reqErrorTest(OrderService.getAll);
    await OrderController.getAll({}, res);
    commonExpectsReturn(res, OrderService.getAll);
    expect(OrderService.getAll).toHaveBeenCalledWith();
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

  it("register a new order", async () => {
    const res = resConfig();
    const req = {
      params: {
        user_id: "id_fake",
        address: "fake adress, 755",
        order_id: "order 45363",
        status: "in order",
      },
    };
    documentReturn(OrderService.registerOrder);
    await OrderController.registerOrder(req, res);
    reqErrorTest(OrderService.registerOrder);
    await OrderController.registerOrder(req, res);
    commonExpectsReturn(res, OrderService.registerOrder);
    expect(OrderService.registerOrder).toHaveBeenCalledWith(
      req.params.user_id,
      req.params.address,
      req.params.order_id,
      req.params.status
    );
  });

  it("delete an order by ID", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "fake_id",
      },
    };
    documentReturn(OrderService.deleteOrder);
    await OrderController.deleteOrder(req, res);
    reqErrorTest(OrderService.deleteOrder);
    await OrderController.deleteOrder(req, res);
    commonExpectsReturn(res, OrderService.deleteOrder);
    expect(OrderService.deleteOrder).toHaveBeenCalledWith(req.params.id);
  });

  it("update an order", async () => {
    const res = resConfig();
    const req = {
      params: {
        id: "fake_id",
        user_id: "fake_user_id",
        address: "fake_address",
        order_id: "order_id_fake",
        status: "in order",
      },
    };
    documentReturn(OrderService.updateOrder);
    await OrderController.updateOrder(req, res);
    reqErrorTest(OrderService.updateOrder);
    await OrderController.updateOrder(req, res);
    commonExpectsReturn(res, OrderService.updateOrder);
    expect(OrderService.updateOrder).toHaveBeenCalledWith(
      req.params.id,
      req.params.user_id,
      req.params.address,
      req.params.order_id,
      req.params.status
    );
  });
});
