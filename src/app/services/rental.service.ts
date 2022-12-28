import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RentalService {
    private baseUrl = 'http://localhost:8080/rentals';

    constructor(private http: HttpClient) { }

    getRental(id: number) : Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createRental(rental: Object) : Observable<any>{
        return this.http.post(`${this.baseUrl}`, rental);
    }
    updateRental(id:number, value: any) : Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteRental(id: number) : Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
    }
    getOpenRentalList(): Observable<any>{
        return this.http.get(`${this.baseUrl}/open`);
    }
    getClosedRentalList(): Observable<any>{
        return this.http.get(`${this.baseUrl}/close`);
    }
}