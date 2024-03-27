import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'; 

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

  //chiamata post
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }

}