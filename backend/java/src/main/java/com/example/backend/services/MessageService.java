package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import com.example.backend.services.implementation.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entities.Message;
import com.example.backend.repositories.MessageRepository;

@Service
public class MessageService implements IMessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public List<Message> findAll() {
        return messageRepository.findAll();
    }

    @Override
    public Message findOne(Long id) {
        return messageRepository.findById(id).orElse(null);
    }

    @Override
    public Message getOne(Long id) {
        return messageRepository.findById(id).orElse(null);
    }

    @Override
    public Message create(Message data) {
        try {
            return messageRepository.save(data);
        } catch (Exception e) {
            System.err.println("Error creating message: " + e.getMessage());
            return null;
        }
    }

    @Override
    public Message update(Long id, Message data) {
        Optional<Message> existingMessage = messageRepository.findById(id);
        if (existingMessage.isPresent()) {
            data.setId(id); // Ensure the entity has the correct ID
            return messageRepository.save(data);
        } else {
            System.out.println("Message with id " + id + " not found");
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        messageRepository.deleteById(id);
    }
}
