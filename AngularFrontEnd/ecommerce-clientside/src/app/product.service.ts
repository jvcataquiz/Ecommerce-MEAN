import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  private baseUrl = "http://localhost:8080/";

  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }
}
