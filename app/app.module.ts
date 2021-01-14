import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BaconIpsum } from './bacon-ipsum.component';
import { OnlyMyBacon } from './only-my-pork.directive';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BaconIpsum, OnlyMyBacon ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
