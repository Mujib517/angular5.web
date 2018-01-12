import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-users',
    template: `<h1>Users</h1>
    
    <div class="col-md-5">
        <div class="well" *ngFor="let user of users">
            <h3>{{user.login}}</h3>
            <img [src]="user.avatar_url" width="120" height="120" class="img img-circle"/>
        </div>
    </div>
    
    `
})
export class UsersComponent {
    users: any;

    constructor(httpClient: HttpClient) {
        //async
        httpClient.get("https://api.github.com/users")
            .subscribe(
                (res) => { this.users = res; console.log("response is ", res); },
                (err) => console.log(err)
            )
    }
}