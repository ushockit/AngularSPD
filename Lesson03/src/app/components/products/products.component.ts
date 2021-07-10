import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "./products.service";
import {Observable, of} from "rxjs";
import {Product} from "./interfaces/product.interface";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(private router: Router, private productsService: ProductsService) {
  }
  onBtnClick() {
    // програмная навигация
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts();
  }
}
