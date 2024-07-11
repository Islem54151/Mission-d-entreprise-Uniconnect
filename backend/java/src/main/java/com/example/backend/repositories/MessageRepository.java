package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}

