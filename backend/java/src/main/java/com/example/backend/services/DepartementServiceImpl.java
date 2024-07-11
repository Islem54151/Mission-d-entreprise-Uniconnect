package com.example.backend.services;

import com.example.backend.entities.Departement;
import com.example.backend.repositories.DepartementRepo;
import com.example.backend.services.implementation.IDepartementService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DepartementServiceImpl implements IDepartementService {
    DepartementRepo departementRepo;

    @Override
    public Departement ajouterDepartement(Departement departement) {
        return departementRepo.save(departement);
    }

    public void supprimerDepartement(List<Departement> departements) {
        departementRepo.deleteInBatch(departements);
    }
    @Override
    public void supprimerDepartementParID(long id) {
        departementRepo.deleteById(id);
    }
    @Override
    public List<Departement> afficherTout() {
        return departementRepo.findAll();

    }
    @Override
    public List<Departement> ajouterDepartements(List<Departement> departements) {
        return departementRepo.saveAll(departements);
    }
    @Override
    public Departement modifierDepartement(Departement departement) {
        return departementRepo.save(departement);
    }

    @Override
    public Departement modifierNomDepartement(String nom, long id) {
        Departement departement= departementRepo.findById(id).orElse(null);
        if (departement != null)
            departement.setDName(nom);
        return departementRepo.save(departement);
    }

   // @Override
   // public Departement affecterEtudiantADepartement(String nomDep, Utilisateur Etudiant) {
        //1etape recuperation
       // Departement departement = departementRepo.findFoyerByNomFoyer(nomFoyer);
        //2etape affectation  suivant la regle parent.setFils
       // bloc.setFoyer(foyer);
        //3etape enregistrer
       // blocRepo.save(bloc);
       // return foyerRepo.findFoyerByNomFoyer(nomFoyer);

    //}
}
