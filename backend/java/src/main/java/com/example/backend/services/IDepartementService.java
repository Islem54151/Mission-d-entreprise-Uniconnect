package com.example.backend.services;

import com.example.backend.entities.Departement;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IDepartementService {
    public Departement ajouterDepartement(Departement departement);
    public void supprimerDepartement(List<Departement> departements);
    void supprimerDepartementParID(long id);
    public List<Departement> afficherTout();

    public List<Departement> ajouterDepartements(List<Departement> departements);
    public Departement modifierDepartement(Departement departement);
    public Departement modifierNomDepartement(String nom, long id);
    //public Departement affecterEtudiantADepartement(String nomDep, Utilisateur Etudiant);
}
