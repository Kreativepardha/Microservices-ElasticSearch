import { ICatalogRepo } from "../interface/catelogRepoInterface";

export class CatalogService {
  private _repository: ICatalogRepo;

  constructor(repository: ICatalogRepo) {
    this._repository = repository;
  }

  async createProduct(input: any) {
    const data = await this._repository.create(input);
    if (!data.id) {
      throw new Error("unable to create product");
    }
    return data;
  }
  updateProduct(input: any) {
    const data = await this._repository.update(input)
    // also emit event to update record in Elastic Search
  }
  getProducts(limit: number, offset: number) {}
  getProduct(id: number) {}
  deleteProduct(id: number) {}
}
