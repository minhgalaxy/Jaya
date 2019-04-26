import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FileSystemBrowserModule } from './fs-browser/fs-browser.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileSystemBrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
