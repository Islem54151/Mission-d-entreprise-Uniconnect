package com.example.backend.restController;



import com.example.backend.dto.FindConversation;
import com.example.backend.entities.Conversation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.services.implementation.IConversationService;

@RestController
@RequestMapping("conversation")
public class ConversationRestController {

    @Autowired
    IConversationService conversationService;

    @GetMapping("all")
    public void findAll() {
    }

    @PostMapping("find")
    public Conversation findOne(@RequestBody FindConversation findConversation) {
       return conversationService.findOne(findConversation);
    }

    @GetMapping("get/{id}")
    public void getOne() {
    }

    @PostMapping("create")
    public void create() {
    }

    @PutMapping("update")
    public void update() {
    }

    @DeleteMapping("delete")
    public void delete() {
    }



}
