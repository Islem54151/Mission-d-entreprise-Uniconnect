package com.example.backend.services;

import com.example.backend.dto.FindConversation;
import com.example.backend.entities.Conversation;
import com.example.backend.repositories.ConversationRepository;
import com.example.backend.services.implementation.IConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConversationService implements IConversationService {

    @Autowired
    private ConversationRepository conversationRepository;

    @Override
    public List<Conversation> findAll() {
        return null;
    }

    @Override
    public Conversation findOne(FindConversation findConversation) {

        Optional<Conversation> conversation = conversationRepository.findConversationByUsers(findConversation.getSender(), findConversation.getReceiver());
        return conversation.orElse(null);

    }

    @Override
    public Conversation getOne(Long id) {
        return null;
    }

    @Override
    public Conversation create(Conversation data) {
        return null;
    }

    @Override
    public Conversation update(Long id, Conversation data) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
