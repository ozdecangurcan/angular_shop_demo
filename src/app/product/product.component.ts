import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  title = "Ürün Listesi";

  filterText = "";

  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getProduct(params["categoryId"]);
    });
  }

  addToCart(product) {
    this.alertifyService.success(product.name + " Added");
  }

  getProduct(categoryId) {
    this.productService.getProduct(categoryId).subscribe((data) => {
      this.products = data;
    });
  }
}
