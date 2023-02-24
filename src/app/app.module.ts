import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PizzadetailsComponent } from './pizzadetails/pizzadetails.component';
import { CardPageComponent } from './card-page/card-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule} from "@angular/common/http";
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    PizzadetailsComponent,
    CardPageComponent,
    RegisterPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    OrderConfirmationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
