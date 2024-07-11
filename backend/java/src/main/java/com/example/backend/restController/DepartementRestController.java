package com.example.backend.restController;

import com.example.backend.entities.Departement;
import com.example.backend.services.implementation.IDepartementService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/departement-rest-controller")
public class DepartementRestController {
    private final IDepartementService departementService;
    @PostMapping("/departement")
    public Departement ajouterDepartement(@RequestBody Departement departement) {
        System.out.println("Received department object: " + departement);
        return departementService.ajouterDepartement(departement);
    }





    @DeleteMapping("/departements")
    public void supprimerDepartement(@RequestBody List<Departement> departements) {
        departementService.supprimerDepartement(departements);
    }


    @DeleteMapping("/departement/{id-departement}")
    public void supprimerDepartementParID(@PathVariable("id-departement") Long id) {
        departementService.supprimerDepartementParID(id);
    }


    @GetMapping("/departement")
    public List<Departement> afficherTout() {
        return departementService.afficherTout();
    }


    @PostMapping("/departements")
    public List<Departement> ajouterDepartements(@RequestBody List<Departement> departements) {
        return departementService.ajouterDepartements(departements);
    }


    @PutMapping("/departement")
    public Departement modifierDepartement(@RequestBody Departement departement) {
        return departementService.modifierDepartement(departement);
    }


    @PutMapping("/departement/{id-departement}/{nom-departement}")
    public Departement modifierNomDepartement(@PathVariable("nom-departement") String nom, @PathVariable("id-departement") Long id) {
        return departementService.modifierNomDepartement(nom, id);
    }

}
