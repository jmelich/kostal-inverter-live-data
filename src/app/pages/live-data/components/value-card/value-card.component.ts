import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InverterData} from "../../../../classes/inverter-data";

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss']
})
export class ValueCardComponent implements OnInit, OnChanges {

  @Input() values?: InverterData[];
  results ?: any;

  constructor() { }

  ngOnInit(): void {
    this.results = [
      {
        name: '',
        series: [
        ]
      }
    ]
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
