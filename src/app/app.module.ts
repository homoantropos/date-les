import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahidComponent } from './zahid/zahid.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ZahidCreatorComponent } from './zahid-creator/zahid-creator.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { HomeComponent } from './home/home.component';
import { ZahidDetailsComponent } from './zahid/zahid-details/zahid-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ZahidComponent,
    SheduleComponent,
    ZahidCreatorComponent,
    ErrorHandlerComponent,
    HomeComponent,
    ZahidDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
