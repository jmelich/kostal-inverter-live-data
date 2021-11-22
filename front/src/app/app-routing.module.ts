import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LiveDataComponent} from "./pages/live-data/live-data.component";
import {ConfigurationComponent} from "./pages/configuration/configuration.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'livedata', pathMatch: 'full'},
  { path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'livedata', component: LiveDataComponent},
      { path: 'configuration', component: ConfigurationComponent},
    ]
  },
  { path: '**', redirectTo: 'livedata' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
