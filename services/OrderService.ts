import { iOrderService } from "../contracts/iOrderService";
import { Result } from "../infra/Result";
import { OrderRepository } from "../repository/OrderRepository";

export class OrderService implements iOrderService {
  async get(_id: string) {
    let result = await OrderRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    let result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await OrderRepository.count({});
    result.Data = await OrderRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    let result = await OrderRepository.find({});
    return result;
  }

  async registerOrder(
    user_id: string,
    address: string,
    order_id: string,
    status: string
  ) {
    let result = await new OrderRepository({
      user_id: user_id,
      address: address,
      order_id: order_id,
      status: status,
    });
    result.save();
    return result;
  }

  async deleteOrder(id: string) {
    let result = await OrderRepository.findByIdAndDelete(id);
    return result;
  }

  async updateOrder(
    id: string,
    user_id: string,
    address: string,
    order_id: string,
    status: string
  ) {
    try {
      const updatedOrder = await OrderRepository.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            user_id: user_id,
            address: address,
            order_id: order_id,
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
