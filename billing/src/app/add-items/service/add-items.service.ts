import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/BaseUrl';
import { Items } from 'src/app/model/items';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {
  private item:Items[]=[];
  getData:string="/getData";

  getItemData() {
    this.http.get<Items[]>(this.url.base_url+this.getData).subscribe(res=>{
      alert();
    });
  }

  constructor(private http:HttpClient,private url:BaseUrl) { }
}
