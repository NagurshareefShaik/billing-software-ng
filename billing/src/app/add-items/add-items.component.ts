import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Items } from '../model/items';
import {AddItemsService} from './service/add-items.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemCodeValue:number;
  itemNameValue:string;
  itemPriceValue:number;
  @ViewChild('itemCode',{static:false})  itemCode:ElementRef<any>;
  @ViewChild('itemName',{static:false})  itemName:ElementRef<any>;
  @ViewChild('itemPrice',{static:false})  itemPrice:ElementRef<any>;
  constructor(
    private addItemService:AddItemsService
    ) {}

  ngOnInit() {
    this.getItemsData();
  }
  getItemsData() {
    this.addItemService.getItemData();
  }

  saveItem(){
this.itemCodeValue=this.itemCode.nativeElement.value;
this.itemNameValue=this.itemName.nativeElement.value;
this.itemPriceValue=this.itemPrice.nativeElement.value;
// this.items.itemCode=this.itemCodeValue;
// this.items.itemName=this.itemNameValue;
// this.items.itemPrice=this.itemPriceValue;
alert(
  this.itemCodeValue+' '+
  this.itemNameValue+' '+
  this.itemPriceValue
);
  }

}
