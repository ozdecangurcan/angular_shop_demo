import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductAddCfComponent } from './product/product-add-cf/product-add-cf.component';
import { ProductAddRfComponent } from './product/product-add-rf/product-add-rf.component';

const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "product-add-cf", component: ProductAddCfComponent },
  { path: "product-add-rf", component: ProductAddRfComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products/category/:categoryId", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
