import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsukaPictureComponent } from './components/asuka-picture/asuka-picture.component';
import { DataAsukaPicturesComponent } from './components/data-asuka-pictures/data-asuka-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    AsukaPictureComponent,
    DataAsukaPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
