import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatToolbar, MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {CdkScrollable, CdkScrollableModule} from "@angular/cdk/scrolling";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



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
    BrowserAnimationsModule
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
  ]
})
export class SharedModule { }
