package com.example.backend.restController;

import com.example.backend.entities.Departement;
import com.example.backend.entities.Examen;
import com.example.backend.services.IExamenService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/examen-rest-controller")
public class ExamenRestcontroller {
    @Autowired
    IExamenService examenservice;
    @PostMapping("/ajout")
    public Examen ajouterExamen(@RequestBody Examen examen) {

        return examenservice.ajouterExamen(examen);
    }

 @DeleteMapping("/supp_examen/{id-examen}")
    public void supprimerExamenParID(@PathVariable("id-examen") Long id) {
        examenservice.supprimerExamenParID(id);
    }
    @GetMapping(path = "/examen")
    public List<Examen> afficherTout(){
        return examenservice.afficherTout();
    }



}
