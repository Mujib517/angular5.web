import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` 
        <h1 [ngClass]="cls">This is a heading</h1>

        <table border="1" [ngStyle]="styles">
            <tr>
                <td>Value</td>
                <td>Index</td>
                <td>Even</td>
                <td>Odd</td>
                <td>First</td>
                <td>Last</td>
            </tr>
            <tr [ngClass]="{cls1:evn,cls2:odd}" 
            *ngFor="let val of vals;let idx=index;let evn=even;let odd=odd;let fst=first;let lst=last">
                <td>{{val}}</td>
                <td>{{idx}}</td>
                <td>{{evn}}</td>
                <td>{{odd}}</td>
                <td>{{fst}}</td>
                <td>{{lst}}</td>
            </tr>
        </table>

        <div [ngSwitch]="age">
            <h3 *ngSwitchCase="10">You are a kid</h3>
            <h3 *ngSwitchCase="20">You are young</h3>
            <h3 *ngSwitchCase="30">You are still young</h3>
            <h3 *ngSwitchDefault>You rock!</h3>
        </div>
        

        <div *ngIf="message">
            <h1>This is a heading</h1>
            <h1>another heading</h1>
            <h1>...</h1>
            <div>
            </div>
        </div>
        
        <button (click)="toggle()">Toggle</button>
    `
})
export class AppComponent {
    styles = {
        border: '3px solid green',
        'border-radius': '10px'
    };
    message: boolean = true;
    vals: number[] = [1, 2, 3, 4, 5, 6];
    age: number = 0;
    cls: any = { fg: true, bg: false };
    //string,string[],object
    toggle() {
        this.message = !this.message;

        // let age=20;
        // switch(age){
        //     case 10:
        //     break;
        //     case 20:
        //     break;
        //     default:
        //     break;
        // }
    }
}


//ngIf,ngSwitch, ngFor, ngModel, ngClass and ngStyle
// attribute directives and structural directives