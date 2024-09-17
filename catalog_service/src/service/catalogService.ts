import { ICatalogRepo } from "../interface/catelogRepoInterface";

export class CatalogService {
  private _repository: ICatalogRepo;

  constructor(repository: ICatalogRepo) {
    this._repository = repository;
  }
  createProduct(input: any) {}
  updateProduct(input: any) {}
  getProducts(limit: number, offset: number) {}
  getProduct(id: number) {}
  deleteProduct(id: number) {}
}
