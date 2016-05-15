export class Post {
    private link:string;
    private user:string;

    public set setLink(link:string) {
        this.link = link;
    }

    public get getLink():string {
        return this.link;
    }

    public set setUser(user:string) {
        this.user = user;
    }

    public get getUser(): string {
        return this.user;
    }
}