package com.example.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Examen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   Long id;
    String subject ;
    String classe ;
   LocalDate date;
    String time ;
    String  duration;
    String  roomNo;
     Integer totalMarks ;
   Integer reqMarks;
}
