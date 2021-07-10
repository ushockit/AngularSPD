import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

interface ProductApi {
  id: number
  name: string;
  price: number
}

@Injectable()
export class ProductsApiService {
  getAllProducts(): Observable<ProductApi[]> {
    return of([{
      id: 1,
      name: 'Product 1',
      price: 100
    }, {
      id: 2,
      name: 'Product 2',
      price: 150
    }, {
      id: 3,
      name: 'Product 3',
      price: 70
    }]);
  }
}
