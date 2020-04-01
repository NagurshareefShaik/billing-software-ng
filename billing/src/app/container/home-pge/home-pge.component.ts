import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pge',
  templateUrl: './home-pge.component.html',
  styleUrls: ['./home-pge.component.css']
})
export class HomePgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabIndex = 0 ;

changeTab(event){
   this.tabIndex = event.index;
}

}
