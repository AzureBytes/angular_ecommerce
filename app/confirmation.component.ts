import {Component, Input} from '@angular/core';

@Component({
  selector: 'confirmation',
  templateUrl: 'app/views/confirmation.component.html'
})
export class ConfirmationComponent {
  @Input() public ConfirmationCode : string;
}