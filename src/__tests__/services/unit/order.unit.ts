import { describe, it, jest } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
} from "../../utils/factory";
import OrderService from "../../../services/OrderService";
import { OrderRepository } from "../../../repository/OrderRepository";

jest.mock("../../../repository/OrderRepository");

describe("Orders service", () => {
  it("get order by id", async () => {
    documentReturn(OrderRepository.findById);
    const getByID = await OrderService.get("id");
    commonExpectsServicesReturn(getByID);
  });

  //   getallwithlimit implements;

  it("get all orders", async () => {
    documentReturn(OrderRepository.find);
    const allOrders = await OrderService.getAll();
    commonExpectsServicesReturn(allOrders);
  });

  it("register a order", async () => {
    documentReturn(OrderRepository.create);
    const insertedOrder = await OrderService.registerOrder(
      "user_id",
      "address",
      "order_id",
      "status"
    );
    commonExpectsServicesReturn(insertedOrder);
  });

  it("delete Order", async () => {
    documentReturn(OrderRepository.findByIdAndDelete);
    const deleteOrder = await OrderService.deleteOrder("id");
    commonExpectsServicesReturn(deleteOrder);
  });

  it("update Order", async () => {
    documentReturn(OrderRepository.findByIdAndUpdate);
    const updateOrder = await OrderService.updateOrder(
      "id",
      "user_id",
      "address",
      "order_id",
      "status"
    );
    commonExpectsServicesReturn(updateOrder);
  });
});
