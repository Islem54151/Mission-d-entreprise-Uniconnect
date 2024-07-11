package com.example.backend.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "conversation")
public class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = true)
    private String name;

    @Column(columnDefinition = "DATETIME")
    private LocalDate createdAt;

    @Column(columnDefinition = "DATETIME")
    private LocalDate updatedAt;

    @ManyToOne
    @JsonManagedReference
    @JsonBackReference
    private User sender;

    @ManyToOne
    @JsonManagedReference
    @JsonBackReference
    private User reciver;

    @OneToMany(mappedBy = "conversation", cascade = CascadeType.ALL)
    @JsonManagedReference // Prevents serialization of the messages field on this side
    private List<Message> messages = new ArrayList<>();

}
