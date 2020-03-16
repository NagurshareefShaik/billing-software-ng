import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/BaseUrl';
import { Items } from 'src/app/model/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {
  private item:Items[]=[];
  getData:string="/getData";
  insertData:string="/insert";
  
  saveData(data: Items[]) {
    this.http.post(this.url.base_url+this.insertData,data).subscribe(res=>{
      console.log("insert");
    });
  }

  getItemData():Observable<Items[]> {
    return this.http.get<Items[]>(this.url.base_url+this.getData);
  }

  constructor(private http:HttpClient,private url:BaseUrl) { }
}
