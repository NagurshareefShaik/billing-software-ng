import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ItemsService } from './service/items.service';
import { Observable, empty, BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { commonText } from 'src/app/text/common.text';
import { Items } from 'src/app/model/items';
import { ItemsDialogComponent } from 'src/app/dialogs/items-dialog/items-dialog.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[];
  itemCodeValue: number;
  itemNameValue: string;
  itemPriceValue: number;
  hasErrror: boolean;
  recordCount: number;
  displayedColumns: Object = { 'itemCode': 'Item Code', 'itemName': 'Item Name', 'itemPrice': 'Item Price' };
  dataSource: any;
  constructor(
    private itemService: ItemsService,
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
    return this.itemService.getItemData();
  }

  saveItem() {
    this.validation();
    if (this.hasErrror) {
      const data: Items = new Items();
      data['itemCode'] = this.itemCodeValue;
      data['itemName'] = this.itemNameValue;
      data['itemPrice'] = this.itemPriceValue;
      this.itemService.saveData(data).subscribe(result => {
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
    let dialogRef = this.dialog.open(ItemsDialogComponent, {
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
