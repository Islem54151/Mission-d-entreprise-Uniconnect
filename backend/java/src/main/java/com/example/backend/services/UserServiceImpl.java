package com.example.backend.services;

import com.example.backend.entities.Role;
import com.example.backend.entities.User;
import com.example.backend.repositories.UserRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {
    UserRepo userRepo;
    @Override
    public User ajouterUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User supprimerUser(User user) {
        userRepo.delete(user);
        return userRepo.findById(user.getId()).orElse(null);
    }

    @Override
    public User chercherUserParId(long idUser) {
        return userRepo.findById(idUser).orElse(null);
    }

    @Override
    public void supprimerUserParId(long idUser) {
      userRepo.deleteById(idUser);
    }

    @Override
    public List<User> afficherTout() {
        return userRepo.findAll();
    }

    @Override
    public List<User> ajouterUsers(List<User> users) {
        return userRepo.saveAll(users);
    }

    @Override
    public User modifierUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User modifierNomUser(String nom, Long idUser) {
        User user=userRepo.findById(idUser).orElse(null);
        if(user!=null)
            user.setLastname(nom);
        return userRepo.save(user);
    }
    public List<User> getAllStudents() {
        return userRepo.findAll().stream()
                .filter(user -> user.getRole() == Role.STUDENT)
                .collect(Collectors.toList());
    }

    public User addStudent(User user) {
        user.setRole(Role.STUDENT);
        return userRepo.save(user);
    }

    public User updateStudent(User user) {
        if (user.getRole() != Role.STUDENT) {
            throw new IllegalArgumentException("User is not a student");
        }
        return userRepo.save(user);
    }

    public void deleteStudent(Long id) {
        User user = userRepo.findById(id).orElse(null);
        if (user != null && user.getRole() == Role.STUDENT) {
            userRepo.deleteById(id);
        } else {
            throw new IllegalArgumentException("User is not a student or does not exist");
        }
    }
    public List<User> getAllTeachers() {
        return userRepo.findAll().stream()
                .filter(user -> user.getRole() == Role.TEACHER)
                .collect(Collectors.toList());
    }

    public User addTeacher(User user) {
        user.setRole(Role.TEACHER);
        return userRepo.save(user);
    }

    public User updateTeacher(User user) {
        if (user.getRole() != Role.TEACHER) {
            throw new IllegalArgumentException("User is not a teacher");
        }
        return userRepo.save(user);
    }

    public void deleteTeacher(Long id) {
        User user = userRepo.findById(id).orElse(null);
        if (user != null && user.getRole() == Role.TEACHER) {
            userRepo.deleteById(id);
        } else {
            throw new IllegalArgumentException("User is not a teacher or does not exist");
        }
    }
}
