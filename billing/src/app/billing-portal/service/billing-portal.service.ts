import { Injectable } from '@angular/core';
import { Items } from 'src/app/model/items';
import { Observable } from 'rxjs';
import { BaseUrl } from 'src/app/BaseUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BillingData } from 'src/app/model/billingData';

@Injectable({
  providedIn: 'root'
})
export class BillingPortalService {

  saveBillingData(billingData: BillingData):Observable<any> {
    return this.http.post<any>(this.url.base_url+this.saveBilling,billingData);
  }
  
  saveBilling: string="/saveBillingData";
  getItem:string="/getItemData";
  getItemNames: string = "/getItemNames";


  getItemData(data: Items):Observable<Items>{
    return this.http.post<Items>(this.url.base_url+this.getItem,data,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  
  getItemsData(): Observable<Items[]> {
    return this.http.get<Items[]>(this.url.base_url + this.getItemNames);
  }

  constructor(
    private url:BaseUrl,
    private http:HttpClient
    ) { }
}
