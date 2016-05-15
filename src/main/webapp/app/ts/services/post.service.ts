import {Injectable, Inject} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Post} from '../models/post';

@Injectable()
export class PostService {
    constructor(@Inject(Http) private _http:Http) {
    }

    getPosts() {
        return this._http.get('/api/posts')
            .map(response => response.json());
    }

    savePost(post:Post) {
        let options = new RequestOptions({
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        let body = JSON.stringify(post);
        this._http.post('/api/posts', body, options)
            .map(res => res.json()).toPromise().catch((err) => console.log(err))
    }
}