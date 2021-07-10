import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Product, ProductRawData} from "./interfaces/product.interface";
import {ProductsApiService} from "../../common/api/product-api.service";
import {debounceTime, tap} from "rxjs/operators";

@Injectable()
export class ProductsService {
  constructor(private productsApiService: ProductsApiService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.productsApiService.getAllProducts().pipe(debounceTime(5000));
  }
}
