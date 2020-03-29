import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public itemData: any) { }
  itemCodeValue:number=this.itemData.itemCode;
  itemNameValue:string=this.itemData.itemName;
  itemPriceValue:number=this.itemData.itemPrice;

  ngOnInit() {
  }

}
