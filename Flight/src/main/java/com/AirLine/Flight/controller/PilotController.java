package com.AirLine.Flight.controller;


import com.AirLine.Flight.model.Pilot;
import com.AirLine.Flight.repository.PilotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/airline/pilots")


public class PilotController {

    @Autowired
    private PilotRepository pilotRepository;



    @GetMapping
       public List<Pilot> getAllPilot(){return pilotRepository.findAll();}


    @PostMapping("/ADDpilots")
       public Pilot createPilot(@RequestBody Pilot pilot){return pilotRepository.save(pilot);}



    @GetMapping("/GetIdpilots/{id}")
    public ResponseEntity<Pilot> getPilotById(@PathVariable Long id){
        Pilot pilot=pilotRepository.findById(id)
                .orElseThrow(()->new com.AirLine.Flight.exception.RessourceNotFound("Pilot not exist with id:"+id));
        return ResponseEntity.ok(pilot);
    }




    @PutMapping("/Updatepilots/{id}")
    public ResponseEntity<Pilot> updatePilot(@PathVariable Long id,@RequestBody Pilot pilotDetails){
        Pilot pilot=pilotRepository.findById(id)
                .orElseThrow(()->new com.AirLine.Flight.exception.RessourceNotFound("Pilot not exist with id:"+id));
        pilot.setPilotName(pilotDetails.getPilotName());
        pilot.setPilotRank(pilotDetails.getPilotRank());
        pilot.setPilotLicense(pilotDetails.getPilotLicense());
        pilot.setPlane(pilotDetails.getPlane());
        Pilot updatePilot=pilotRepository.save(pilot);
        return ResponseEntity.ok(updatePilot);
    }


  @DeleteMapping("/Deletepilots/{id}")
  public ResponseEntity<HttpStatus> deletePilot(@PathVariable Long id){
      Pilot pilot=pilotRepository.findById(id)
              .orElseThrow(()->new com.AirLine.Flight.exception.RessourceNotFound("Pilot not exist with id:"+id));
      pilotRepository.delete(pilot);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }



  @PostMapping("/pilotat")
    Pilot newPilot(@RequestBody Pilot newPilot) {
        return pilotRepository.save(newPilot);
    }



    @GetMapping("/ALLpilots")
    public List<Pilot> getALLPilots() {
        return pilotRepository.findAll();
    }
























}
