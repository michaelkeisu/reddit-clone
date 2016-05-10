export class Post {
    private _link:string;
    private _user:string;

    public set link(link:string) {
        this._link = link;
    }

    public get link():string {
        return this._link;
    }

    public set user(user:string) {
        this._user = user;
    }

    public get user(): string {
        return this._user;
    }
}