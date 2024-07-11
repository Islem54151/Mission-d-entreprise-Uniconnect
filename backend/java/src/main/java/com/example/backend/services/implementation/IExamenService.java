package com.example.backend.services.implementation;

import com.example.backend.entities.Departement;
import com.example.backend.entities.Examen;

import java.util.List;

public interface IExamenService {
    public Examen ajouterExamen(Examen examen);
    public void supprimerExamenParID(long id);

    public List<Examen> afficherTout() ;


}
