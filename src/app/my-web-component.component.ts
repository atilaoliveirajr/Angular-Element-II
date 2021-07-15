import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jts-my-web-component',
  templateUrl: './my-web-component.component.html',
  styleUrls: ['./my-web-component.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyWebComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}