import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public pageInfo: any;
  @Output() onOption = new EventEmitter<any>();
  @Output() goBack = new EventEmitter<any>();

  constructor(route: ActivatedRoute) {
    this.pageInfo = route.snapshot.data;
  }

  ngOnInit() {

  }

  onGoBack(event) {
    this.goBack.emit(event);
  }
  
  onExecOption(event) {
    this.onOption.emit(event);
  }
}
