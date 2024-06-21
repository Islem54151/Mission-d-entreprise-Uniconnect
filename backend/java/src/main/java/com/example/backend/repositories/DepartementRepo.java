package com.example.backend.repositories;

import com.example.backend.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartementRepo  extends JpaRepository<Departement,Long> {
}
