package com.example.backend.services.implementation;

import com.example.backend.entities.User;

import java.util.List;

public interface IUserService {
    User ajouterUser(User user);
    User supprimerUser(User user);
    User chercherUserParId(long idUser);
    void supprimerUserParId (long idUser);
    List<User> afficherTout();
    List<User> ajouterUsers(List<User> users);

    User modifierUser(User user);
    User modifierNomUser(String nom,Long idUser);
    List<User> getAllStudents();
    User addStudent(User user);
    User updateStudent(User user);
    void deleteStudent(Long id);
    List<User> getAllTeachers();
    User addTeacher(User user);
    User updateTeacher(User user);
    void deleteTeacher(Long id);
    //Add by Islem Nasraoui
    public long countStudents();
    //Add by Islem Nasraoui
    public long countTeachers();
    //Add by Islem Nasraoui
    public long countNewStudents();
    //Add by Islem Nasraoui
    public long countOldStudents();


}
