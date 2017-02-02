import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Address} from './models/address.model';

@Component({
  selector: 'address',
  templateUrl: 'app/views/address.component.html'
})
export class AddressComponent {
  @Input() public InputAddress : Address;
  @Output() public requestBrochureEvent: EventEmitter<string> = new EventEmitter<string>();

  public requestBrochure(args : any) {
    this.requestBrochureEvent.next('Request Brochure button clicked');
  }
}