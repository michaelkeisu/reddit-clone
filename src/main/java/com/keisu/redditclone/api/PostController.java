package com.keisu.redditclone.api;

import com.keisu.redditclone.models.Post;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        System.out.println(post.getId());
        System.out.println(post.getLink());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public List<Post> listPosts() {
        return Arrays.asList(
                new Post(1, "http://twitter.com", "janedoe"),
                new Post(2, "http://facebook.com", "billdoe"),
                new Post(3, "http://idg.se", "johndoe")
        );
    }


}
