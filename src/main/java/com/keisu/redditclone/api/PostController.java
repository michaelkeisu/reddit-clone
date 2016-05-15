package com.keisu.redditclone.api;

import com.keisu.redditclone.models.Post;
import com.keisu.redditclone.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {
    @Autowired
    private PostService postService;

    @RequestMapping(value = "/posts", method = RequestMethod.POST)
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        // TODO complete
        postService.savePost(post);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public ResponseEntity<List<Post>> listPosts() {
        // TODO complete
        return new ResponseEntity<>(postService.listAll(), HttpStatus.OK);
    }


}
