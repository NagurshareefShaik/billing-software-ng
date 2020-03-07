import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})
export class BillingPortalComponent implements OnInit {

time:string;
date:string;
billNumber:number;

  constructor() { }

  ngOnInit() {
    this.myTimer();
  }

  save(){
alert('save process is in progress');
  }
  print(){
window.print();
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    this.billNumber=1;
  }
}


