package com.keisu.redditclone.services;

import com.keisu.redditclone.models.Post;
import com.keisu.redditclone.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> listAll(){
        return postRepository.findAll();
    }

    public void savePost(Post post) {
        postRepository.saveAndFlush(post);
    }
}
