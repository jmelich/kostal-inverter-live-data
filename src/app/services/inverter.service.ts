import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxXmlToJsonService} from "ngx-xml-to-json";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InverterService {

  url = '192.168.100.110';

  constructor(
    private http: HttpClient,
    private ngxXmlToJsonService: NgxXmlToJsonService
  ) { }

  getInverterData() {
    return this.http.get(`${this.url}/measurements.xml`).pipe(
      map((inverterData: any) => {
        const options = { // set up the default options
          textKey: 'text', // tag name for text nodes
          attrKey: 'attr', // tag for attr groups
          cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
        };
        return this.ngxXmlToJsonService.xmlToJson(inverterData, options)
      })
    )
  }
}
