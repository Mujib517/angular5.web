import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <h1 border>Contact Page</h1>
   <h1 [show]="showElement">THis is heading</h1>
   <h1 *if="showElement">THis is heading 2</h1>
  `
})
export class ContactComponent {
  showElement: boolean = true;
}
