package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.backend.entities.Conversation;

import java.util.Optional;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Long> {

    @Query("SELECT c FROM conversation c WHERE (c.sender.id = :sender AND c.reciver.id = :receiver) OR (c.sender.id = :receiver AND c.reciver.id = :sender)")
    Optional<Conversation> findConversationByUsers(@Param("sender") Long sender, @Param("receiver") Long receiver);

}
