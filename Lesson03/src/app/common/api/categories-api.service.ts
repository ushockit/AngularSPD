import {Observable, of} from "rxjs";

interface CategoryApi {
  id: number;
  name: string;
}

export class CategoriesApiService {
  getAllCategories(): Observable<CategoryApi[]> {
    return of([{
      id: 1,
      name: 'Category 1'
    }, {
      id: 2,
      name: 'Category 2'
    }]);
  }
}
