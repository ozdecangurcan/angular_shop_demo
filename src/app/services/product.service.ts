import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../product/product";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ProductService {
  path = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) {}

  getProduct(categoryId): Observable<Product[]> {

    let newPath =this.path;

    if(categoryId){
      newPath+="?categoryId="+categoryId
    }

    return this.httpClient.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";

    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu " + err.error.message;
    } else {
      errorMessage = "Sistemsel Hata";
    }

    return throwError(errorMessage);
  }
}
