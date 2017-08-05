import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import {StddataService} from './stddata.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StddataService],
  bootstrap: [MyComponent]
})
export class AppModule { }
