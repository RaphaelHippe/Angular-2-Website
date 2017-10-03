import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { AppComponent }  from './app.component';

import { ROUTES } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from "./components/routing_components/home/home.component";
import { ReferenceComponent } from "./components/routing_components/reference/reference.component";
import { ImpressumComponent } from "./components/routing_components/impressum/impressum.component";
import { HeaderComponent } from "./components/util_components/header/header.component";
import { FooterComponent } from "./components/util_components/footer/footer.component";


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ReferenceComponent,
    ImpressumComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
