import { Component, OnInit } from '@angular/core';
import { commonText } from 'src/app/text/common.text';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabIndex = 0 ;

changeTab(event){
   this.tabIndex = event.index;
}

}
