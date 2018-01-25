import { Component, OnInit, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <h1>{{count}}</h1>
    <button (click)="inc()">++</button>
    <button (click)="call()">Make Web Svc Call</button>
  `,
  styles: []
})
export class AboutComponent {

  count: number = 0;
  interval;

  constructor(private http: HttpClient) {
    console.log("constructor");

    http.get("https://api.github.com/users")
      .subscribe(
      () => this.count = 1000
      )
    //web service,setTimeouts, events
  }

  ngOnInit() {
    console.log("In init()");
  }

  inc() {
    this.count++;

    this.interval = setInterval(() =>
      this.count++, 1000);
  }

  call() {

  }

  ngDoCheck() {
    console.log("Do check");
  }

  ngOnChanges(change: SimpleChange) {
    console.log("On Changes");
  }

  ngOnDestroy() {
    //this.interval.clear();
    console.log("On Destroy");
  }
}