import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from "../../services/configuration.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  public configurationForm?: FormGroup;

  constructor(
    private configurationService: ConfigurationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configurationForm = this.fb.group({
      inverterAddress: [
        this.configurationService.getConfiguration('inverterAddress'),
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15),
          Validators.pattern(('^((\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$'))
        ]
      ],
      pollingRate: [this.configurationService.getConfiguration('pollingRate'), Validators.required],
    })
  }

  onSubmit() {
    if(this.configurationForm?.valid) {
      Object.keys( this.configurationForm.controls).forEach(key => {
        this.configurationService.setConfiguration(key, this.configurationForm?.controls[key].value);
      });
    }
  }

}
