import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})
export class BillingPortalComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  save(){
alert('save process is in progress');
  }
  print(){
alert('print process is in progress');
  }
}


