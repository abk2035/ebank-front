import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
      return this.http.get<Array<Customer>>(environment.backendHost+"/customers") ;
    }

    public searchCustomers(keyword : string):Observable<Array<Customer>>{
      return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
    }
}
