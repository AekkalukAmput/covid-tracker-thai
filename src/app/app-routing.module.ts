import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'timeline', component: TimelinePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
