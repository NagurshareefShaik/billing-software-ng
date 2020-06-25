import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.css']
})
export class NgButtonComponent implements OnInit {
  @Input() btnIcon: string;
  @Input() btnType:string;
  constructor() { }

  ngOnInit() {
  }

}
