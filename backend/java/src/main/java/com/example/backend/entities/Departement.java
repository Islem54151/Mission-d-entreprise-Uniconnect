package com.example.backend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
    @JsonProperty("dName")
    private String dName;
    @JsonProperty("hod")
    private String hod ;
    @JsonProperty("phone")
    private Integer phone;
    @JsonProperty("email")
    private String email;
    @JsonProperty("sYear")
    private LocalDate sYear;
    @JsonProperty("sCapacity")
    private  Integer sCapacity ;



}
