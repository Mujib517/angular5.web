import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `

  <mat-toolbar color="primary">
    <button mat-button>Home</button>
    <button mat-button>About</button>
    <button mat-button>Contact</button>
  </mat-toolbar>

   <h1>Contact Page</h1>
  
   <button mat-button color="primary">Click</button>
   <button mat-raised-button color="accent">Click</button>
  <button mat-fab>+</button>
  <button mat-mini-fab>+</button>
  
  <mat-checkbox>Check me!</mat-checkbox>

  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>

  <mat-spinner></mat-spinner>
  

  `
})
export class ContactComponent {
  showElement: boolean = true;
}
