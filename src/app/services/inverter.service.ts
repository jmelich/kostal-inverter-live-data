import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {InverterData} from "../classes/inverter-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InverterService {

  url = 'http://192.168.100.205';

  constructor(
    private http: HttpClient
  ) { }

  getInverterData():Observable<InverterData> {
    return this.http.get<InverterData>(`${this.url}/measurements.xml`).pipe(
      map((inverterData: any) => {
        return {
          deviceName: '',
          serial: '',
          OEMSerial: '',
          gridPower: 0
        }
      })
    )
  }
}
