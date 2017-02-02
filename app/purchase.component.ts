import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'purchase',
  templateUrl: 'app/views/purchase.component.html'
})
export class PurchaseComponent {
  @Output() public requestAddressFormEvent: EventEmitter<string> = new EventEmitter<string>();

  public requestAddressForm(args : any) {
    this.requestAddressFormEvent.next('Purchase button clicked');
  }
}