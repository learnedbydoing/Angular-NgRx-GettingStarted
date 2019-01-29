import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

/* NgRx */
import {StoreModule} from '@ngrx/store';

//Redux Dev tools
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),

    UserModule,
    AppRoutingModule,

    StoreModule.forRoot({}), //we dont have reducer for our root app state, so we pass empty object
    StoreDevtoolsModule.instrument({
      name: 'Angular NGRX Deborah Kurata',
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
