package com.example.backend.restController;

import com.example.backend.entities.Classe;
import com.example.backend.services.IClasseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/classes-rest-controller/")

public class ClasseRestController {
    IClasseService classeService;

    @PostMapping(path = "/classe")
    Classe ajouterClasse(@RequestBody Classe classe){
        return classeService.ajouterClasse(classe);
    }
    @DeleteMapping("/classe")
    Classe supprimerClasse(@RequestBody Classe classe){
        return classeService.supprimerClasse(classe);
    }

    @GetMapping("/classe/{id-classe}")
    Classe chercherClasseParId(@PathVariable("id-classe") long idClasse){
        return classeService.chercherClasseParId(idClasse);
    }

    @DeleteMapping("/classe/{id-classe}")
    void supprimerClasseParId (@PathVariable("id-classe") long idClasse){
        classeService.supprimerClasseParId(idClasse);
    }
    @GetMapping("/classes")
    List<Classe> afficherTout(){
        return classeService.afficherTout();
    }
    @PostMapping("/classes")
    List<Classe> ajouterClasses(@RequestBody List<Classe> classes){
        return classeService.ajouterClasses(classes);
    }
    @PutMapping("/classe")
    Classe modifierClasse(@RequestBody Classe classe){
        return classeService.modifierClasse(classe);
    }
    @PutMapping("/classe/{id-classe}/{nom}")
    Classe modifierNomClasse(@PathVariable("nom") String nom,@PathVariable("id-classe") Long idClasse){
        return classeService.modifierNomClasse(nom,idClasse);
    }
}
