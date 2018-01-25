import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    {{count}}
    <button (click)="inc()">++</button>
  `,
  styles: []
})
export class AboutComponent {

  count: number = 0;

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("In init()");
  }

  inc() {
    this.count++;
  }

  ngDoCheck() {
    console.log("Do check");
  }

  ngOnChanges(change: SimpleChange) {
    console.log("On Changes");
  }

  ngOnDestroy() {
    console.log("On Destroy");
  }
}