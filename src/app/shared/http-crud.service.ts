import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpCrudService {

  private url = AppConstants.baseUrl;

  constructor(private http: HttpClient) { }

  get(id: number, endpoint: string){
    return this.http.get(`${this.url+endpoint}/${id}`);
  }

  create(obj: Object, endpoint: string){
    return this.http.post(`${this.url+endpoint}`, obj);
  }

  update(id: number, value, endpoint: string) : Observable<any>{
    return this.http.put(`${this.url+endpoint}/${id}`,value);
  }

  delete(id: number, endpoint: string){
    return this.http.delete(`${this.url+endpoint}/${id}`, {responseType: 'text'});
  }

  getList(endpoint: string) : Observable<any>{
    return this.http.get(`${this.url+endpoint}`)
  }
}
