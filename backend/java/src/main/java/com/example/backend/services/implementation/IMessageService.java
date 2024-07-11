package com.example.backend.services.implementation;

import com.example.backend.entities.Message;
import java.util.List;

public interface IMessageService {
    List<Message> findAll();
    Message findOne(Long id);
    Message getOne(Long id);
    Message create(Message data);
    Message update(Long id, Message data);
    void delete(Long id);
}
