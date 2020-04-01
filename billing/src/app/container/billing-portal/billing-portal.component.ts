import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BillingPortalService } from './service/billing-portal.service';
import { MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BillingItems } from 'src/app/model/billingItem';
import { BillingData } from 'src/app/model/billingData';
import { Items } from 'src/app/model/items';
import { commonText } from 'src/app/text/common.text';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})

export class BillingPortalComponent implements OnInit {
  time: string;
  date: string;
  billNumber: number;
  itemCodeValue: number;
  itemNameValue= new FormControl();
  itemPriceValue: number;
  itemQuantiyValue: number;
  totalAmount: number = 0;
  billingItems: BillingItems = new BillingItems;
  billingDataList: BillingItems[] = [];
  billingData: BillingData = new BillingData;
  displayedColumns: string[] = ['itemCode', 'itemName', 'itemQuantity', 'itemPrice','totalPrice'];
  dataSource: any;
  options: Items[] = [];
  filteredOptions: Observable<Items[]>;
  constructor(
    private billingService: BillingPortalService,
    private snackBar: MatSnackBar,
    private text: commonText
  ) {
    setInterval(() => { this.myTimer(); }, 1000);
  }

  ngOnInit() {
    this.filteredOptions = this.itemNameValue.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.billingService.getItemsData().subscribe(res => {
      this.options = res;
    });
  }


  private _filter(value: string): Items[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.itemName.toLowerCase().includes(filterValue));
  }



  save() {
    if (this.billingDataList.length > 0) {
      this.billingData.billNumber = this.billNumber;
      this.billingData.billDate = new Date().toLocaleDateString();
      this.billingData.totalAmount = this.totalAmount;
      this.billingData.billingItems = this.billingDataList;
      this.billingService.saveBillingData(this.billingData).subscribe((res) => {
        this.dataSource = new MatTableDataSource<BillingItems>([]);
        this.showSnackBar(this.text.dataSaveMessage, "save", "success");
      });

    }
    else {
      this.showSnackBar(this.text.noDataMessage, "", "warning");
    }
  }

  print() {
    window.print();
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date = d.toLocaleDateString();
    this.billNumber=1;
  }

  quantityChange() {
    if (this.itemQuantiyValue && this.itemNameValue.value) {
      this.billingItems['itemCode'] = this.itemCodeValue;
      this.billingItems['itemName'] = this.itemNameValue.value;
      this.billingItems['itemQuantity'] = this.itemQuantiyValue;
      this.billingItems['itemPrice'] =this.itemPriceValue;
      this.billingItems['totalPrice']= this.itemQuantiyValue * this.itemPriceValue;
      this.billingDataList.push(this.billingItems);
      this.dataSource = new MatTableDataSource<BillingItems>(this.billingDataList);
      this.billingItems = new BillingItems;
      this.resetData();
      this.updateAmount();
    }
  }
  updateAmount() {
    this.totalAmount = 0;
    this.billingDataList.forEach(res => {
      this.totalAmount += res.totalPrice;
    });
  }
  resetData() {
    this.itemCodeValue = null;
    this.itemNameValue.setValue('');
    this.itemQuantiyValue = null;
    this.itemPriceValue = null;
  }

  showSnackBar(message: string, action: string, type: string) {
    let snackRef = this.snackBar.open(message, this.text.closeLabel, {
      duration: 2000,
      panelClass: [type]
    });
    snackRef.afterDismissed().subscribe(() => {
      this.snackBar.dismiss();
    });
    if (action === "save") {
      snackRef.afterOpened().subscribe(() => {
        this.billingDataList = [];
        this.totalAmount = 0;
      });
    } else {
      snackRef.afterOpened().subscribe(() => {
        this.billingDataList = [];
        this.totalAmount = 0;
      });
    }
  }

  getItemData(event: any, item: Items) {
    if (event.source.selected) {
      this.itemCodeValue = item.itemCode;
      this.itemPriceValue = item.itemPrice;
      if (this.itemQuantiyValue) {
        this.quantityChange();
      }
    }
  }
}