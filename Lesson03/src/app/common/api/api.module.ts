import { NgModule } from '@angular/core';
import {ProductsApiService} from "./product-api.service";
import {CategoriesApiService} from "./categories-api.service";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [ProductsApiService, CategoriesApiService],
})
export class ApiModule { }
