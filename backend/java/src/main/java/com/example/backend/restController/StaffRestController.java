package com.example.backend.restController;
import com.example.backend.entities.Staff;
import com.example.backend.services.IStaffService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/staff-rest-controller")
public class StaffRestController {
    IStaffService staffService;
    @PostMapping(path ="/staff")
    public Staff ajouterStaff(@RequestBody Staff staff ){
        return staffService.ajouterStaff(staff);
    }

    @DeleteMapping("/staffs")
    void supprimerStaff(@RequestBody Staff staff){
       staffService.supprimerStaff(staff);
    }
    @DeleteMapping("/staff/{id-staff}")
    void supprimerStaffParID( @PathVariable("id-staff") long id){
        staffService.supprimerStaffParID(id);
    }
    @GetMapping("/staff")
    List<Staff> afficherTout(){
        return staffService.afficherTout();
    }
    @PostMapping("/staffs")
    List<Staff> ajouterStaffs( @RequestBody  List<Staff> staffs){
        return staffService.ajouterStaffs(staffs);
    }
    @PutMapping("/staff")
    Staff modifierStaff( @RequestBody  Staff staff){
        return staffService.modifierStaff(staff);
    }
    @PutMapping("/staff/{id-staff}/{nom-staff}")
    Staff modifierNomDepartement(@PathVariable("nom-staff") String nom , @PathVariable("id-staff") long id){
        return staffService.modifierNomStaff(nom,id);
    }

}
