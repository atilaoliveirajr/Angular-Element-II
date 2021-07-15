import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyWebComponentComponent } from './my-web-component.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyWebComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    MyWebComponentComponent
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MyWebComponentComponent, {injector: this._injector});
    customElements.define('my-web-component', el)
  }
 }