import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'; 
import { SetProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = environment.apiUrl;
  private idStore = environment.idStore;

  constructor(private http: HttpClient) { }

  getStoreProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stores/${this.idStore}/products`);
  }

  setNewProduct(data: SetProduct): Observable<any> {
    return this.http.post<SetProduct>(`${this.apiUrl}/stores/${this.idStore}/products`, data);
  }

  deleteProduct(productID: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/stores/${this.idStore}/products/${productID}`);
  }

}