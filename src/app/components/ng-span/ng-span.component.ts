import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-span',
  templateUrl: './ng-span.component.html',
  styleUrls: ['./ng-span.component.css']
})
export class NgSpanComponent implements OnInit {

  @Input() value:string;
  @Input() type:string;
  constructor() { }

  ngOnInit() {
  }

}
