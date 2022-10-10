import { iOrderService } from "../contracts/iOrderService";
import { Result } from "../infra/Result";
import { OrderRepository } from "../repository/OrderRepository";

export class OrderService implements iOrderService {
  async get(_id: string) {
    const result = await OrderRepository.findById(_id);
    return result;
  }

  async getAllWithLimit(page: number, qtd: number): Promise<Result> {
    const result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await OrderRepository.count({});
    result.Data = await OrderRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }

  async getAll() {
    const result = await OrderRepository.find({});
    return result;
  }

  async registerOrder(
    user_id: string,
    address: string,
    order_id: string,
    status: string
  ) {
    const result = await OrderRepository.create({
      user_id: user_id,
      address: address,
      order_id: order_id,
      status: status,
    });
    return result;
  }

  async deleteOrder(id: string) {
    const result = await OrderRepository.findByIdAndDelete(id);
    return result;
  }

  async updateOrder(
    id: string,
    user_id: string,
    address: string,
    order_id: string,
    status: string
  ) {
    await OrderRepository.findOneAndUpdate(
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
  }
}

export default new OrderService();
