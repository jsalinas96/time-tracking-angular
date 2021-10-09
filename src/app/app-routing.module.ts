import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component'

const routes: Routes = [
  {
    path: 'time-tracker',
    component: TimeTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
