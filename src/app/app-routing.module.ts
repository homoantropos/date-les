import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { EventRowComponent } from './event/event-row.component';
import {ErrorHandlerComponent} from './error-handler/error-handler.component';
import {HomeComponent} from './home/home.component';
import {EventDetailsComponent} from './event/event-details/event-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'schedule', component: ScheduleComponent, children: [{
    path: 'add', component: EventCreatorComponent
    }]},
  {path: 'creator', component: EventCreatorComponent},
  {path: 'schedule/:id', component: EventDetailsComponent},
  {path: '**', component: ErrorHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
