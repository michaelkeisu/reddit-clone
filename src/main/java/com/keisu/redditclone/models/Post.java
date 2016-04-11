package com.keisu.redditclone.models;


public class Post {
    private long id;
    private String link;
    private String user; // make object

    public Post(){}

    public Post(long id, String link, String user) {
        this.id = id;
        this.link = link;
        this.user = user;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getLink() {
        return link;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
