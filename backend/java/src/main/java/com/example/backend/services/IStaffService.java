package com.example.backend.services;

import com.example.backend.entities.Departement;
import com.example.backend.entities.Staff;

import java.util.List;

public interface IStaffService {
    public Staff ajouterStaff(Staff staff);
    void supprimerStaff(Staff staff);
    void supprimerStaffParID(long id);
    public List<Staff> afficherTout();

    public List<Staff> ajouterStaffs(List<Staff> staffs);
    public Staff modifierStaff(Staff staff);
    public Staff modifierNomStaff(String nom, long id);
}
