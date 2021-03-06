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
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";



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
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
