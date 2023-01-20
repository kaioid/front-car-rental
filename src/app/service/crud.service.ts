import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = AppConstants.baseUrl;

  constructor(private http: HttpClient) { }

  get(id: number, entity: string){
    return this.http.get(`${this.url+entity}/${id}`);
  }

  create(obj: Object, entity: string){
    return this.http.post(`${this.url+entity}`, obj);
  }

  update(id: number, entity: string, value) : Observable<any>{
    return this.http.put(`${this.url+entity}/${id}`,value);
  }

  delete(id: number, entity: string){
    return this.http.delete(`${this.url+entity}/${id}`, {responseType: 'text'});
  }

  getList(entity: string) : Observable<any>{
    return this.http.get(`${this.url+entity}`);
  }
}
