import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CategoriesApiService} from "../../common/api/categories-api.service";
import {CategoryRawData} from "./interfaces/category.interface";

@Injectable()
export class CategoriesService {
  constructor(private categoriesApiService: CategoriesApiService) {
  }

  getAllCategories(): Observable<CategoryRawData[]> {
    return this.categoriesApiService.getAllCategories();
  }
}
