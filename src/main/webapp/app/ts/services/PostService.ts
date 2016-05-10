import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class PostService {
    private _http;

    constructor(@Inject(Http) http:Http) {
        this._http = http;
    }

    getPosts() {
        return this._http.get('/api/posts')
            .map(response => response.json());
    }
}