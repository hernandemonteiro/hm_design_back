import { iCartService } from "../contracts/iCartService";
import { Result } from "../infra/Result";
import { CartRepository } from "../repository/CartRepository";

export class CartService implements iCartService {
  async get(_id: string) {
    return await CartRepository.findById(_id);
  }

  async getWithPagination(page: number, qtd: number): Promise<Result> {
    const result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await CartRepository.count({});
    result.Data = await CartRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    return await CartRepository.find({});
  }

  async deleteProductOfCart(_id: string) {
    return await CartRepository.findByIdAndDelete(_id);
  }

  async insertProductInCart(productToInsert) {
    return await CartRepository.create({
      user_id: productToInsert.user_id,
      quantity: productToInsert.quantity,
      product_id: productToInsert.product_id,
      product: productToInsert.product,
      unit_price: productToInsert.unit_price,
      total_price: productToInsert.total_price,
      order_id: productToInsert.order_id,
      status: productToInsert.status,
    });
  }

  async updateProductCart(productToUpdate) {
    return await CartRepository.findOneAndUpdate(
      { _id: productToUpdate.id },
      {
        $set: {
          user_id: productToUpdate.user_id,
          quantity: productToUpdate.quantity,
          product_id: productToUpdate.product_id,
          product: productToUpdate.product,
          unit_price: productToUpdate.unit_price,
          total_price: productToUpdate.total_price,
          status: productToUpdate.status,
        },
      }
    );
  }
}
export default new CartService();
