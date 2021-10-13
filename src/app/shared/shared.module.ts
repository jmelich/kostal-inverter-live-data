import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatToolbar, MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {CdkScrollable, CdkScrollableModule} from "@angular/cdk/scrolling";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {LineChartComponent, NgxChartsModule} from "@swimlane/ngx-charts";
import {NgxXmlToJsonModule} from "ngx-xml-to-json";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    CdkScrollableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxChartsModule,
  ],
  exports: [
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    CdkScrollable,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    LineChartComponent,
    NgxXmlToJsonModule
  ]
})
export class SharedModule { }
