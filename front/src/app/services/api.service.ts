import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InverterData} from "../classes/inverter-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://127.0.0.1:3000'
  inverterUrl = 'http://192.168.100.205';

  constructor(
    private http: HttpClient
  ) { }

  getInverterData():Observable<InverterData> {
    return this.http.get<InverterData>(`${this.apiUrl}?inverterIP=${this.inverterUrl}`);
  }
}
