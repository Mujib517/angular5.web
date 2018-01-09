import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1 [class.fg]="message">Hello Angular</h1>

        <h3>{{message}}</h3>
        <input type="text" [(ngModel)]="message"/>


        <button [disabled]="message">Button</button>

        <button (click)="onClick(1)">Click me</button>

        <h1>{{1+2}}</h1>
        <h1>{{"Mujib" +" Rahman"}}</h1>
        

        <h3 [style.border]="message?'1px solid green':'none'">{{getMsg()}}</h3>

        {{message?"Yes":"No"}}
    `
})
export class AppComponent {
    message: string = "Hello world1111";

    //truthy
    //falsy: 0,undefined,null,"",false,NaN

    getMsg(): string {
        //side effects
        return "Hello!!";
    }

    onClick(param) {
        console.log("Button clicked", param);
    }
}

//1.expressions or interpolation {{}}
//2.Property binding []
//3.Event binding   ()
//4.Class Binding   []
//5.Style binding   []
//6.Two way binding