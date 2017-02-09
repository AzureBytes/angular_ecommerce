import { Component } from '@angular/core';
import { BrochureService } from './services/brochure.service';
import { Address, AddressResponse } from './models/address.model';
import { AppSettings } from './app.settings';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'marketing',
  templateUrl: 'app/views/marketing.component.html',
  providers: [
    BrochureService
  ]
})
export class MarketingComponent {
  private postUrl: string = AppSettings.API_ENDPOINT;

  constructor(private brochureService: BrochureService) { }

  public MailingAddress: Address = new Address();
  public ServiceConfirmationCode: string;
  public ShowPurchaseScreen: boolean = true;
  public ShowAddressScreen: boolean = false;
  public ShowConfirmationScreen: boolean = false;

  public onRequestAddressForm(args: string) {
    this.ShowPurchaseScreen = false;
    this.ShowAddressScreen = true;
  }

  public onRequestBrochure(args: string) {

    this.brochureService.submitBrochure(this.MailingAddress)
      .subscribe(
        response => {
          console.log(JSON.stringify(response));
          console.log(response.id);
          this.ServiceConfirmationCode = response.id
          this.ShowAddressScreen = false;
          this.ShowConfirmationScreen = true;
        },
        error => console.log(<any>error)
      );
  }
}
