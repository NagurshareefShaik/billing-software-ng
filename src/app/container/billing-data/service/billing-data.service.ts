import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/BaseUrl';
import { BillingData } from 'src/app/model/billingData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {
  getBillingData: string="/getBillingData"
  getBillingDataInfo() :Observable<BillingData[]>{
    return this.http.get<BillingData[]>(this.url.base_url+this.getBillingData);
  }

  constructor(
    private http:HttpClient,
    private url:BaseUrl
    ) { }
}
