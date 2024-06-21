package com.example.backend.services;

import com.example.backend.entities.Classe;
import com.example.backend.entities.User;
import com.example.backend.repositories.ClasseRepo;
import com.example.backend.repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class ClasseServiceImpl implements IClasseService{
    ClasseRepo classeRepo;
    UserRepo userRepo;
    @Override
    public Classe ajouterClasse(Classe classe) {
        return classeRepo.save(classe);
    }

    @Override
    public Classe supprimerClasse(Classe classe) {
        classeRepo.delete(classe);
        return classeRepo.findById(classe.getIdClasse()).orElse(null);
    }

    @Override
    public Classe chercherClasseParId(long idClasse) {
        return classeRepo.findById(idClasse).orElse(null);
    }

    @Override
    public void supprimerClasseParId(long idClasse) {
        classeRepo.deleteById(idClasse);
    }

    @Override
    public List<Classe> afficherTout() {
        return classeRepo.findAll();
    }

    @Override
    public List<Classe> ajouterClasses(List<Classe> classes) {
        return classeRepo.saveAll(classes);
    }

    @Override
    public Classe modifierClasse(Classe classe) {
        return classeRepo.save(classe);
    }

    @Override
    public Classe modifierNomClasse(String name, Long idClasse) {
        Classe classe=classeRepo.findById(idClasse).orElse(null);
        if(classe!=null)
            classe.setName(name);
        return classeRepo.save(classe);
    }

  /*  @Override
    public User affecterUserAClasse(long id, String name) {

        //1 ere étape recuperation
        //recherche foyer par id
        User user=userRepo.findById(id).orElse(null);
        //recherche universite par nom
        Classe classe=classeRepo.findByName(name);
        // 2 éme étape affectation suivant la régle parent.setfils
        classe.setUser(user);
        //enregistrer par parent
        return classeRepo.save(classe);
    }*

   */
}
