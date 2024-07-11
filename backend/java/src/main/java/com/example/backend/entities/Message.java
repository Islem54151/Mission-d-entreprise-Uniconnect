package com.example.backend.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name = "conversation_message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conversation_id")
    @JsonBackReference // Prevents serialization of the conversation field on this side
    private Conversation conversation;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(nullable = true)
    @JsonManagedReference
    @JsonBackReference
    private User sender;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String body;

    @Column(columnDefinition = "TINYINT")
    private boolean isSeen;

    @Column(columnDefinition = "DATETIME")
    private LocalDate createdAt;

    @Column(columnDefinition = "DATETIME")
    private LocalDate updatedAt;

}
