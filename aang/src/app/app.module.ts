import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/operators';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule,InputTextModule,FormsModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
