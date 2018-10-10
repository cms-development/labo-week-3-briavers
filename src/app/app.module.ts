import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpCallService } from './services/http-call.service';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RecipeShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
