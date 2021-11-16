import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InverterInfo} from "../classes/inverter-info";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {ConfigurationService} from "./configuration.service";
import {Measurement} from "../classes/measurement";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  getInfo():Observable<InverterInfo> {
    return this.http.get<InverterInfo>(`${environment.apiUrl}/information`, {
      params: {
        inverterAddress: this.configurationService.getConfiguration('inverterAddress') || ''
      }
    })
  }

  getMeasurement():Observable<Measurement> {
    return this.http.get<Measurement>(`${environment.apiUrl}/measurement`, {
      params: {
        inverterAddress: this.configurationService.getConfiguration('inverterAddress') || ''
      }
    })
  }

}
