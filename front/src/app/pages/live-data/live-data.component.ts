import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Measurement} from "../../classes/measurement";
import {interval, Subscription} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import {ConfigurationService} from "../../services/configuration.service";

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {

  measurements?: Measurement[] = [];

  latestMeasurement?:  Measurement;

  polling?: Subscription;

  constructor(
    private apiService: ApiService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.polling = interval((this.configurationService.getConfiguration('pollingRate') as unknown as number) * 1000 || 5000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.getMeasurement())
      ).subscribe( measurement => {
        this.latestMeasurement = measurement;
        this.addData(measurement)
    });
  }

  addData(newData: Measurement) {
    if(this.measurements) {
      this.measurements = [...this.measurements, newData];
    }
  }
}
