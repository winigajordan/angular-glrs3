import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFrontRoutingModule } from './product-front-routing.module';
import { ProductFrontComponent } from './product-front.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListByCategoriesComponent } from './product-list-by-categories/product-list-by-categories.component';


@NgModule({
  declarations: [
    ProductFrontComponent,
    ProductDetailComponent,
    ProductListByCategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductFrontRoutingModule
  ]
})
export class ProductFrontModule { }
