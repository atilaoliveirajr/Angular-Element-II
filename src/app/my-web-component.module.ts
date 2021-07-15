import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyWebComponentComponent } from './my-web-component.component';

import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    MyWebComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MyWebComponentComponent, {injector: this._injector});
    customElements.define('my-web-component', el)
  }
 }