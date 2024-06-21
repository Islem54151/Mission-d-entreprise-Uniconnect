package com.example.backend.restController;

import com.example.backend.entities.User;
import com.example.backend.services.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/users-rest-controller/")

public class UserRestController {
    IUserService userService;

    @PostMapping(path = "/user")
    User ajouterUser(@RequestBody User user){
        return userService.ajouterUser(user);
    }
    @DeleteMapping("/user")
    User supprimerUser(@RequestBody User user){
        return userService.supprimerUser(user);
    }

    @GetMapping("/user/{id-user}")
    User chercherUserParId(@PathVariable("id-user") long idUser){
        return userService.chercherUserParId(idUser);
    }

    @DeleteMapping("/user/{id-user}")
    void supprimerUserParId (@PathVariable("id-user") long idUser){
        userService.supprimerUserParId(idUser);
    }
    @GetMapping("/users")
    List<User> afficherTout(){
        return userService.afficherTout();
    }
    @PostMapping("/users")
    List<User> ajouterUsers(@RequestBody List<User> users){
        return userService.ajouterUsers(users);
    }
    @PutMapping("/user")
    User modifierUser(@RequestBody User user){
        return userService.modifierUser(user);
    }
    @PutMapping("/user/{id-user}/{nom}")
    User modifierNomUser(@PathVariable("nom") String nom,@PathVariable("id-user") Long idUser){
        return userService.modifierNomUser(nom,idUser);
    }


    // New Endpoints for Students
    @GetMapping("/students")
    public List<User> getAllStudents() {
        return userService.getAllStudents();
    }

    @PostMapping("/student")
    public User addStudent(@RequestBody User student) {
        return userService.addStudent(student);
    }

    @PutMapping("/student")
    public User updateStudent(@RequestBody User student) {
        return userService.updateStudent(student);
    }

    @DeleteMapping("/student/{id}")
    public void deleteStudent(@PathVariable Long id) {
        userService.deleteStudent(id);
    }

    // New Endpoints for Teachers
    @GetMapping("/teachers")
    public List<User> getAllTeachers() {
        return userService.getAllTeachers();
    }

    @PostMapping("/teacher")
    public User addTeacher(@RequestBody User teacher) {
        return userService.addTeacher(teacher);
    }

    @PutMapping("/teacher")
    public User updateTeacher(@RequestBody User teacher) {
        return userService.updateTeacher(teacher);
    }

    @DeleteMapping("/teacher/{id}")
    public void deleteTeacher(@PathVariable Long id) {
        userService.deleteTeacher(id);
    }

}


