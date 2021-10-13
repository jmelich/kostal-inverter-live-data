import { Component, OnInit } from '@angular/core';
import {InverterData} from "../../classes/inverter-data";

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {

  inverterData?: InverterData[];

  constructor() { }

  ngOnInit(): void {
  }

  addData(newData: InverterData) {
    if(this.inverterData) {
      this.inverterData = [...this.inverterData, newData];
    }
  }
}
