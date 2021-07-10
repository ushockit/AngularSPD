import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {ProductsComponent} from "./components/products/products.component";
import {ErrorComponent} from "./components/error/error.component";
import {InfoComponent} from "./components/info/info.component";
import {AdminModule} from "./modules/admin/admin.module";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthService} from "./shared/services/auth.service";
import {LocalStorageService} from "./shared/services/local-storage.service";
import {ProductsService} from "./components/products/products.service";
import {ApiModule} from "./common/api/api.module";
import {CategoriesService} from "./components/products/categories.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ErrorComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    AdminModule,
    ApiModule
  ],
  providers: [AuthGuard, AuthService, LocalStorageService, ProductsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
