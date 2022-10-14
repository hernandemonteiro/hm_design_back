import { describe, it, jest, expect } from "@jest/globals";
import {
  documentReturn,
  commonExpectsServicesReturn,
  resultPromise
} from "../utils/utils.unit.factory";
import sinon from "sinon";
import ProductsService from "../../services/ProductsService";
import { ProductsRepository } from "../../repository/ProductsRepository";

jest.mock("../../repository/ProductsRepository");

describe("Products services tests", () => {

  it("get Product by id", async () => {
    documentReturn(ProductsRepository.findById);
    const getByID = await ProductsService.get("id");
    commonExpectsServicesReturn(getByID);
  });

  it("get all products with limit pages", async () => {
    jest.mocked(ProductsRepository.count).mockResolvedValue(10);
    resultPromise(ProductsRepository);
    const getAllWithLimit = await ProductsService.getAllWithLimit(1, 1).then(
      (res) => res.Data
    );
    expect(getAllWithLimit).toMatchObject({ status: "success" });
    sinon.restore();
    expect(ProductsRepository.count).toHaveBeenCalledTimes(1);
  });

  it("get all Products", async () => {
    documentReturn(ProductsRepository.find);
    const allProducts = await ProductsService.getAll();
    commonExpectsServicesReturn(allProducts);
  });

  it("get Products per category", async () => {
    documentReturn(ProductsRepository.find);
    const categorySearch = await ProductsService.getPerCategory("category");
    commonExpectsServicesReturn(categorySearch);
  });

  it("get Products per searhc", async () => {
    documentReturn(ProductsRepository.find);
    const search = await ProductsService.getPerSearch("search");
    commonExpectsServicesReturn(search);
  });

  it("register a Product", async () => {
    documentReturn(ProductsRepository.create);
    const insertedProduct = await ProductsService.registerProduct(
      "name",
      "price",
      "images",
      "description",
      "category",
      "options"
    );
    commonExpectsServicesReturn(insertedProduct);
  });

  it("delete Product", async () => {
    documentReturn(ProductsRepository.findByIdAndDelete);
    const deleteProduct = await ProductsService.deleteProduct("id");
    commonExpectsServicesReturn(deleteProduct);
  });

  it("update Product", async () => {
    documentReturn(ProductsRepository.findByIdAndUpdate);
    const updateProduct = await ProductsService.updateProduct(
      "id",
      "name",
      "price",
      "images",
      "description",
      "category",
      "status",
      "options"
    );
    commonExpectsServicesReturn(updateProduct);
  });
});
