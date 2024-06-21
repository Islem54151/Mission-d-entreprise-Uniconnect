package com.example.backend.repositories;

import com.example.backend.entities.Classe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClasseRepo extends JpaRepository<Classe,Long> {
    Classe findByName(String name);

}
