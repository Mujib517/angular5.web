import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <h1>Contact Page</h1>
   <h1 [show]="showElement">THis is heading</h1>
  `
})
export class ContactComponent {
  showElement: boolean = true;
}
