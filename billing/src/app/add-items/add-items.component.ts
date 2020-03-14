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
  }

}
