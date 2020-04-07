import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ZahidCreatorComponent } from './zahid-creator/zahid-creator.component';
import { ZahidComponent } from './zahid/zahid.component';
import {ErrorHandlerComponent} from './error-handler/error-handler.component';
import {HomeComponent} from './home/home.component';
import {ZahidDetailsComponent} from './zahid/zahid-details/zahid-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shedule', component: SheduleComponent, children:},
  {path: 'creator', component: ZahidCreatorComponent},
  {path: 'shedule/:id', component: ZahidDetailsComponent},
  {path: '**', component: ErrorHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
