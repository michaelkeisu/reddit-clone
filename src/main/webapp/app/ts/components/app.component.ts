import {Component} from 'angular2/core';
import {NewPostComponent} from './newpost.component';
import {ListPostsComponent} from './listposts.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/components/app.component.html',
    directives: [NewPostComponent, ListPostsComponent]
})
export class AppComponent {
}