import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LiveDataComponent} from "./pages/live-data/live-data.component";
import {ConfigurationComponent} from "./pages/configuration/configuration.component";

const routes: Routes = [
  { path: 'livedata', component: LiveDataComponent},
  { path: 'configuration', component: ConfigurationComponent},
  { path: '**', redirectTo: 'livedata' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
