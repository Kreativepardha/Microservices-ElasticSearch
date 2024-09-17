import { ICatalogRepo } from "../interface/catelogRepoInterface";
import { Product } from "../models/product.model";

export class CatalogRepo implements ICatalogRepo {
    _prisma: Prisma
  create(data: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  update(data: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  delete(id: any) {
    throw new Error("Method not implemented.");
  }
  find(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
