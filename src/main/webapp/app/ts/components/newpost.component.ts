import {Component} from 'angular2/core';
import {Post} from '../models/post';

@Component({
    selector: 'new-post',
    templateUrl: '/app/ts/components/newpost.component.html'
})
export class NewPostComponent {
    model: Post;

    constructor() {
        this.model = new Post();
    }

    public newPost() {
        // TODO remove
        console.log(JSON.stringify(this.model))
    }
}