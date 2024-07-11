package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
//@ToString
//@EqualsAndHashCode

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String cin;
    String firstname;
    String lastname;
    String email;
    String password;
    LocalDate dateBirth;
    String image = "/uploads/Default_user.png";    String token;
    String specialite;
    String department;
    @Column(name = "date_created")
    //Add by Islem Nasraoui
    private LocalDate dateCreated;
    @Enumerated(EnumType.STRING)
    Role role;
    @Enumerated(EnumType.STRING)
    Gender gender;
    @ManyToOne
   Classe classe;
}
