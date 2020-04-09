import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventRowComponent } from './event/event-row.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EventRowComponent,
    ScheduleComponent,
    EventCreatorComponent,
    ErrorHandlerComponent,
    HomeComponent,
    EventDetailsComponent,
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
