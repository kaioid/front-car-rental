import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    private baseUrl = 'http://localhost:8080/invoices';

    constructor(private http: HttpClient) { }

    getInvoice(id: number) : Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createInvoice(invoice: Object,) : Observable<any>{
        return this.http.post(`${this.baseUrl}`, invoice);
    }
    updateInvoice(id: number, value: any): Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteInvoice(id: number) : Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }
    getInvoiceList(): Observable<any>{
        return this.http.get(`${this.baseUrl}`)
    }
}