import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Items } from '../model/items';
import {AddItemsService} from './service/add-items.service';
import { Observable, empty } from 'rxjs';

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
  recordCount:number;
  constructor(
    private addItemService:AddItemsService
    ) {}

  ngOnInit() {
    this.message="welcome!!"
    this.getItemsData().subscribe(res=>{
this.items=res;
this.recordCount=res.length;
    });
  }
  getItemsData():Observable<Items[]> {
    return this.addItemService.getItemData();
  }

  saveItem(){
    this.validation();
    if(this.hasErrror){
      const data:Items=new Items();
      data['itemCode']=this.itemCodeValue;
      data['itemName']=this.itemNameValue;
      data['itemPrice']=this.itemPriceValue;
    this.addItemService.saveData(data).subscribe(result=>{
      this.items=result;
      this.recordCount=result.length;
      this.resetData();
          });
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

  resetData(){
    this.itemCodeValue;
  this.itemNameValue="";
  this.itemPriceValue;
  }

}
