import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InverterData} from "../classes/inverter-data";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {ConfigurationService} from "./configuration.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  getInverterData():Observable<InverterData> {
    return this.http.get<InverterData>(environment.apiUrl, {
      params: {
        inverterAddress: this.configurationService.getConfiguration('inverterAddress') || ''
      }
    }).pipe(
      map( x => x) //TODO swap request to InverterData
    )
  }
}
