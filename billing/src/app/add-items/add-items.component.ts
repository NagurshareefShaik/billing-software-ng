import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Items } from '../model/items';
import {AddItemsService} from './service/add-items.service';
import { Observable, empty } from 'rxjs';
import {MatSnackBar, MatDialog, MatTableDataSource} from '@angular/material';

import { commonText } from '../text/common.text';
import { ItemsComponent } from '../items/items.component';

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
  displayedColumns: string[] = ['itemCode', 'itemName', 'itemPrice'];
  dataSource = new MatTableDataSource<Items>(this.items);
  constructor(
    private addItemService:AddItemsService,
    private snackBar:MatSnackBar,
    private commonText:commonText,
    private dialog:MatDialog
    ) {}

  ngOnInit() {
    this.message="welcome!!"
    this.getItemsData().subscribe(res=>{
    this.dataSource = new MatTableDataSource<Items>(res);
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
      this.showSnackBar(this.commonText.saveMessage);  
          });
    }else{
      this.showSnackBar(this.commonText.warningMessage);
      // this.dialog.open(ItemsComponent);
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
    this.itemCodeValue=null;
    this.itemNameValue="";
    this.itemPriceValue=null;
  }

  showDialog(row){
    console.log(row);
  }

  showSnackBar(message:string){
    let snackbar=this.snackBar.open(message,this.commonText.closeLabel,{
      duration:2000,
    });
    snackbar.afterDismissed().subscribe(()=>{
      this.snackBar.dismiss;
    });
  }

}
