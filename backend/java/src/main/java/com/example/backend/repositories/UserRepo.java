package com.example.backend.repositories;

import com.example.backend.entities.Role;
import com.example.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    //Add by Islem Nasraoui
    long countByRole(Role role);
    //Add by Islem Nasraoui
    long countByRoleAndDateCreatedAfter(Role role, LocalDate date);
    //Add by Islem Nasraoui
    long countByRoleAndDateCreatedBefore(Role role, LocalDate date);

}
