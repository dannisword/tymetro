import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public pageInfo: any;
  constructor(route: ActivatedRoute) { 
    this.pageInfo = route.snapshot.data; 
    console.log(this.pageInfo);
  }
 
  ngOnInit() {
    
  }

}
