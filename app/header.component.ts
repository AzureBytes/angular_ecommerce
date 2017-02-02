import {Component, Input} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'app/views/header.component.html'
})
export class HeaderComponent {
    @Input() Title: string;
    @Input() SubTitle: string;
}