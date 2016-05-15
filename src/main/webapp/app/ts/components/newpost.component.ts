import {Component} from 'angular2/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Component({
    selector: 'new-post',
    templateUrl: '/app/ts/components/newpost.component.html',
    providers: [PostService]
})
export class NewPostComponent {
    model: Post;

    constructor(private _postService:PostService) {
        this.model = new Post();
        
    }

    public newPost() {
        this._postService.savePost(this.model);
    }
}