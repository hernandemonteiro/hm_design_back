import { describe, it, jest, expect } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
  resultPromise,
} from "../utils/factory";
import sinon from "sinon";
import CartService from "../../services/CartService";
import { CartRepository } from "../../repository/CartRepository";

jest.mock("../../repository/CartRepository");

describe("cart service tests", () => {
  it("get a product in cart by ID", async () => {
    documentReturn(CartRepository.findById);
    const getByid = await CartService.get("id");
    commonExpectsServicesReturn(getByid);
  });

  it("get all products in cart with limit pages", async () => {
    jest.mocked(CartRepository.count).mockResolvedValue(10);
    resultPromise(CartRepository);
    const getAllWithLimit = await CartService.getAllWithLimit(1, 1).then(
      (res) => res.Data
    );
    expect(getAllWithLimit).toMatchObject({ status: "success" });
    sinon.restore();
    expect(CartRepository.count).toHaveBeenCalledTimes(1);
  });

  it("get all products in cart without limits", async () => {
    documentReturn(CartRepository.find);
    const getAll = await CartService.getAll();
    expect(CartRepository.find).toHaveBeenCalledTimes(1);
    commonExpectsServicesReturn(getAll);
  });

  it("delete an product by ID in cart", async () => {
    documentReturn(CartRepository.findByIdAndDelete);
    const deleteProduct = await CartService.deleteProductCart("id");
    commonExpectsServicesReturn(deleteProduct);
  });

  it("insert a product in cart", async () => {
    documentReturn(CartRepository.create);
    const insertedProduct = await CartService.registerProductCart(
      "user_id",
      "quantity",
      "product_id",
      "product",
      "unit_price",
      "total_price",
      "order_id",
      "status"
    );
    commonExpectsServicesReturn(insertedProduct);
  });

  it("update a product", async () => {
    documentReturn(CartRepository.findOneAndUpdate);
    const updated = await CartService.updateProductCart(
      "id",
      "user_id",
      "quantity",
      "product_id",
      "product",
      "unit_price",
      "total_price",
      "status"
    );
    commonExpectsServicesReturn(updated);
  });
});
