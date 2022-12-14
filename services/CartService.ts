import { iCartService } from "../contracts/iCartService";
import { Result } from "../infra/Result";
import { CartRepository } from "../repository/CartRepository";

export class CartService implements iCartService {
  async get(_id: string) {
    let result = await CartRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    let result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await CartRepository.count({});
    result.Data = await CartRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    let result = await CartRepository.find({});
    return result;
  }

  async deleteProductCart(_id: string) {
    const deleteProductCart = await CartRepository.findByIdAndDelete(_id);
    return deleteProductCart;
  }

  async registerProductCart(
    user_id: string,
    quantity: string,
    product_id: string,
    product: string,
    unit_price: string,
    total_price: string,
    order_id: string,
    status: string
  ) {
    const registeredProduct = new CartRepository({
      user_id: user_id,
      quantity: quantity,
      product_id: product_id,
      product: product,
      unit_price: unit_price,
      total_price: total_price,
      order_id: order_id,
      status: status,
    });
    registeredProduct.save();
    return registeredProduct;
  }

  async updateProductCart(
    id: string,
    user_id: string,
    quantity: string,
    product_id: string,
    product: string,
    unit_price: string,
    total_price: string,
    status: string
  ) {
    try {
      const updatedOrder = await CartRepository.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            user_id: user_id,
            quantity: quantity,
            product_id: product_id,
            product: product,
            unit_price: unit_price,
            total_price: total_price,
            status: status,
          },
        }
      );
      return { status: "success" };
    } catch (error) {
      return { status: "Error: " + error.toString() };
    }
  }
}
