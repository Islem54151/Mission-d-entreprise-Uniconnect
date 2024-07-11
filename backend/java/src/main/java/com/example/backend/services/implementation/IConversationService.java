package com.example.backend.services.implementation;

import com.example.backend.dto.FindConversation;
import com.example.backend.entities.Conversation;

import java.util.List;

public interface IConversationService {
    public List<Conversation> findAll();
    public Conversation findOne(FindConversation findConversation);
    public Conversation getOne(Long id);
    public Conversation create(Conversation data);
    public Conversation update(Long id, Conversation data);
    public void delete(Long id);

}
