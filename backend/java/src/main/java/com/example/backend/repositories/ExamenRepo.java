package com.example.backend.repositories;

import com.example.backend.entities.Examen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamenRepo extends JpaRepository<Examen,Long> {
}
