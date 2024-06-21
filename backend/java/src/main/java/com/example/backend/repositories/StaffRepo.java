package com.example.backend.repositories;

import com.example.backend.entities.Departement;
import com.example.backend.entities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepo extends JpaRepository<Staff,Long> {
}
