package com.example.backend.restController;


import com.example.backend.entities.Message;
import com.example.backend.services.implementation.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageRestController {

    @Autowired
    private IMessageService messageService;

    @GetMapping("/all")
    public ResponseEntity<List<Message>> findAll() {
        List<Message> messages = messageService.findAll();
        return ResponseEntity.ok(messages);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Message> findOne(@PathVariable Long id) {
        Message message = messageService.findOne(id);
        if (message != null) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Message> getOne(@PathVariable Long id) {
        Message message = messageService.getOne(id);
        if (message != null) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Message> create(@RequestBody Message message) {
        Message createdMessage = messageService.create(message);
        if (createdMessage != null) {
            return ResponseEntity.ok(createdMessage);
        } else {
            return ResponseEntity.status(500).build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Message> update(@PathVariable Long id, @RequestBody Message message) {
        Message updatedMessage = messageService.update(id, message);
        if (updatedMessage != null) {
            return ResponseEntity.ok(updatedMessage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        messageService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
