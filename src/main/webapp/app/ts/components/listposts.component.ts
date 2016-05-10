import {Component, OnInit} from 'angular2/core';
import {PostService} from '../services/postservice';
import {Post} from '../models/post';

@Component({
    selector: 'list-posts',
    templateUrl: '/app/ts/components/listposts.component.html',
    providers: [PostService]
})
export class ListPostsComponent implements OnInit {
    posts:Array<Post>;

    constructor(private _postService:PostService) {
    }

    ngOnInit() {
        this._postService.getPosts().subscribe(data => {
            this.posts = data;
        });
    }
}