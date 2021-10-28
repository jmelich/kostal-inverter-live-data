import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { LiveDataComponent } from './pages/live-data/live-data.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ValueCardComponent } from './pages/live-data/components/value-card/value-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveDataComponent,
    ConfigurationComponent,
    ValueCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
