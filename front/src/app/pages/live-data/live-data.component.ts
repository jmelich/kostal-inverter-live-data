import { Component, OnInit } from '@angular/core';
import {InverterData} from "../../classes/inverter-data";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {

  inverterData?: InverterData[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getInverterData().subscribe((next: InverterData) => {
      console.log(next);
    })
  }

  addData(newData: InverterData) {
    if(this.inverterData) {
      this.inverterData = [...this.inverterData, newData];
    }
  }
}
