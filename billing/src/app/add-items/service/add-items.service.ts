import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {

  getData:string="/getData";

  getItemData() {
    this.http.get(this.url.base_url+this.getData).subscribe(res=>{
console.log(res);
    })
  }

  constructor(private http:HttpClient,private url:BaseUrl) { }
}
