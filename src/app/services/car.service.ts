import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CarService {
    private baseUrl = 'http://localhost:8080/api/vehicles';

    constructor(private http: HttpClient) { }

    getCar(id: number) : Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createCar(vehicle: Object) : Observable<any>{
        return this.http.post(`${this.baseUrl}`, vehicle);
    }
    updateCar(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteCar(id: number) : Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }
    getCarList(): Observable<any>{
        return this.http.get(`${this.baseUrl}`);
    }
}