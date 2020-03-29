import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.css']
})
export class ItemsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public itemData: any) { }
  itemCodeValue:number=this.itemData.itemCode;
  itemNameValue:string=this.itemData.itemName;
  itemPriceValue:number=this.itemData.itemPrice;

  ngOnInit() {
  }

}
