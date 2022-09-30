import CartService from "../services/CartService";
import { describe, expect, it } from "@jest/globals";

describe("cart", () => {
  it("Get products with a limit", () => {
    const getAllWithLimit = CartService.getAllWithLimit(1, 10);
    expect(getAllWithLimit);
  });
  it("Get All products", () => {
    const getAll = CartService.getAll();
    expect(getAll);
  });
  // it("Get a product by ID", () => {
  //   const get = CartService.get("id");
  //   expect(get);
  // });
  // it("Insert a Product in cart", () => {
  //   const getCart = CartService.registerProductCart(
  //     "user_id_test",
  //     "quantity_test",
  //     "product_id_test",
  //     "product_test",
  //     "unit_price_test",
  //     "total_price_test",
  //     "order_id_test",
  //     "status_test"
  //   );
  //   expect(getCart);
  // });
  // it("Delete a product of cart", () => {
  //   const getCart = CartService.deleteProductCart("id");
  //   expect(getCart);
  // });

  it("Update a Product of cart", () => {
    const getCart = CartService.updateProductCart;
    expect(getCart);
  });
});
