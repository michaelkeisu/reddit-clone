import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class PostService {
    constructor(@Inject(Http) private _http:Http) {
    }

    getPosts() {
        return this._http.get('/api/posts')
            .map(response => response.json());
    }
}