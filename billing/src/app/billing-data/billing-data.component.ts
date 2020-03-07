import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.css']
})
export class BillingDataComponent implements OnInit {

  time:string;
date:string;
billNumber:number;
  constructor() { }

  ngOnInit() {
    this.myTimer();
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    this.billNumber=1;
  }

}
