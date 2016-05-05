
import {Component} from 'angular2/core';
import {NewPostComponent} from "./newpost.component";
@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/components/app.component.html',
    directives: [NewPostComponent]
})
export class AppComponent {
}