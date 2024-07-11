package com.example.backend.services;

import com.example.backend.entities.Examen;
import com.example.backend.repositories.ExamenRepo;
import com.example.backend.services.implementation.IExamenService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class ExamenServiceImpl implements IExamenService {
    ExamenRepo examenRepo;
    @Override
    public Examen ajouterExamen(Examen examen) {
        return examenRepo.save(examen);
    }


    @Override
    public void supprimerExamenParID(long id) {
        examenRepo.deleteById(id);
    }

    @Override
    public List<Examen> afficherTout() {

            return examenRepo.findAll();


    }
}
