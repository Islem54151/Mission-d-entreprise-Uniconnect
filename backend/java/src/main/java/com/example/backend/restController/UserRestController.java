package com.example.backend.restController;

import com.example.backend.entities.User;
import com.example.backend.repositories.UserRepo;
import com.example.backend.services.implementation.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private UserRepo userRepository;

    @PostMapping("/{id}/uploadImage")
    public ResponseEntity<Map<String, String>> uploadImage(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                try {
                    Files.createDirectories(uploadPath);
                } catch (IOException e) {
                    e.printStackTrace();
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "Could not create upload directory"));
                }
            }
            try {
                String fileName = id + "_" + file.getOriginalFilename();
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(file.getInputStream(), filePath);

                String imageUrl = "/uploads/" + fileName;  // Assuming '/uploads/' is the base URL for images
                user.setImage(imageUrl);
                userRepository.save(user);

                return ResponseEntity.ok(Map.of("message", "File uploaded successfully", "fileName", fileName, "imageUrl", imageUrl));
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "File upload failed"));
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "User not found"));
        }
    }
    @GetMapping("/uploads/{fileName}")
    public ResponseEntity<byte[]> getUploadedImage(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(UPLOAD_DIR, fileName);
            byte[] imageBytes = Files.readAllBytes(filePath);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
//Add By Islem Nasraoui
@GetMapping("/counts")
public Map<String, Long> getCounts() {
    Map<String, Long> counts = new HashMap<>();
    counts.put("students", userService.countStudents());
    counts.put("teachers", userService.countTeachers());
    counts.put("newStudents", userService.countNewStudents()); // Assuming you have this method
    counts.put("oldStudents", userService.countOldStudents()); // Assuming you have this method

    return counts;
}
}


