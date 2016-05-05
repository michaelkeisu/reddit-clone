export class Post {
    link:string;
    user:string;

    constructor() {

    }

    constructor(link:string, user:string) {
        this.link = link;
        this.user = user;
    }
}