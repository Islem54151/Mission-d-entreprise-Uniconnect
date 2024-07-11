package com.example.backend.services;

import com.example.backend.entities.Staff;
import com.example.backend.repositories.StaffRepo;
import com.example.backend.services.implementation.IStaffService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements IStaffService {
    StaffRepo staffRepo;
    @Override
    public Staff ajouterStaff(Staff staff) {
        return staffRepo.save(staff);
    }

    @Override
    public void supprimerStaff(Staff staff) {
staffRepo.delete(staff);
    }

    @Override
    public void supprimerStaffParID(long id) {
staffRepo.deleteById(id);
    }

    @Override
    public List<Staff> afficherTout() {
        return staffRepo.findAll();
    }

    @Override
    public List<Staff> ajouterStaffs(List<Staff> staffs) {
        return staffRepo.saveAll(staffs);
    }

    @Override
    public Staff modifierStaff(Staff staff) {
        return staffRepo.save(staff);
    }

    @Override
    public Staff modifierNomStaff(String nom, long id) {
        Staff staff = staffRepo.findById(id).orElse(null);
        if (staff != null)
            staff.setNomStaff(nom);
        return staffRepo.save(staff);
    }
}
