import { Component, OnInit } from '@angular/core';
import { Items } from '../model/items';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  items:Items;
  constructor() { }

  ngOnInit() {
    let data={
      itemCode:123,
      itemName:'sample',
      itemQuantity:2,
      itemPrice:20
    }
    this.items=data;
  }

}
