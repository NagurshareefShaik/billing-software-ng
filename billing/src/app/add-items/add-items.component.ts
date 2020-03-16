import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Items } from '../model/items';
import {AddItemsService} from './service/add-items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  items:Items[];
  itemCodeValue:number;
  itemNameValue:string;
  itemPriceValue:number;
  message:string;
  hasErrror:boolean;
  constructor(
    private addItemService:AddItemsService
    ) {}

  ngOnInit() {
    this.message="welcome!!"
    this.getItemsData().subscribe(res=>{
this.items=res;
    });
  }
  getItemsData():Observable<Items[]> {
    return this.addItemService.getItemData();
  }

  saveItem(){
    this.validation();
    if(this.hasErrror){
      let data=[];
      data['itemCode']=this.itemCodeValue;
      data['itemName']=this.itemNameValue;
      data['itemPrice']=this.itemPriceValue;
    this.addItemService.saveData(data);
    }else{
alert('Please enter required fields');
    }
  }
  validation() {
    if(this.itemCodeValue&&this.itemNameValue&&this.itemPriceValue){
this.hasErrror=true;
    }
    else{
      this.hasErrror=false;
    }
  }

}
