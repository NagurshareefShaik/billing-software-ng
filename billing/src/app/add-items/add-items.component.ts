import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Items } from '../model/items';
import { AddItemsService } from './service/add-items.service';
import { Observable, empty } from 'rxjs';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';

import { commonText } from '../text/common.text';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  items: Items[];
  itemCodeValue: number;
  itemNameValue: string;
  itemPriceValue: number;
  hasErrror: boolean;
  recordCount: number;
  displayedColumns: string[] = ['itemCode', 'itemName', 'itemPrice'];
  dataSource: any;
  constructor(
    private addItemService: AddItemsService,
    private snackBar: MatSnackBar,
    private commonText: commonText,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getItemsData().subscribe(res => {
      this.dataSource = new MatTableDataSource<Items>(res);
      this.recordCount = res.length;
    });
  }
  getItemsData(): Observable<Items[]> {
    return this.addItemService.getItemData();
  }

  saveItem() {
    this.validation();
    if (this.hasErrror) {
      const data: Items = new Items();
      data['itemCode'] = this.itemCodeValue;
      data['itemName'] = this.itemNameValue;
      data['itemPrice'] = this.itemPriceValue;
      this.addItemService.saveData(data).subscribe(result => {
        this.dataSource = new MatTableDataSource<Items>(result);
        this.recordCount = result.length;
        this.resetData();
        this.showSnackBar(this.commonText.saveMessage, 'success');
      });
    } else {
      this.showSnackBar(this.commonText.warningMessage, 'warning');
    }
  }
  validation() {
    if (this.itemCodeValue && this.itemNameValue && this.itemPriceValue) {
      this.hasErrror = true;
    }
    else {
      this.hasErrror = false;
    }
  }

  resetData() {
    this.itemCodeValue = null;
    this.itemNameValue = "";
    this.itemPriceValue = null;
  }

  showDialog(row) {
    let dialogRef = this.dialog.open(ItemsComponent, {
      width: '400px', height: '350px',
      data: { itemCode: row.itemCode, itemName: row.itemName, itemPrice: row.itemPrice }
    });
  }

  showSnackBar(message: string, type: string) {
    let snackbar = this.snackBar.open(message, this.commonText.closeLabel, {
      duration: 2000,
      panelClass: [type]
    });
    snackbar.afterDismissed().subscribe(() => {
      this.snackBar.dismiss;
    });
  }

}
