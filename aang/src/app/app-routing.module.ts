import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotogpComponent } from './motogp/motogp.component';
import { IomttComponent } from './iomtt/iomtt.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { F1Component } from './f1/f1.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'motogp', component: MotogpComponent },
  { path: 'f1', component: F1Component },
  { path: 'iomtt', component: IomttComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
export const routingcomponents = [MotogpComponent, F1Component, IomttComponent, WelcomeComponent]



