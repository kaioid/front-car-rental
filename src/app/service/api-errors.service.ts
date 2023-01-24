import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorsService {

  private url = AppConstants.baseUrl;

  constructor(private http: HttpClient) { }

  getResponseError(){
    
  }
}
