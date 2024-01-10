package com.AirLine.Flight.controller;


import com.AirLine.Flight.exception.RessourceNotFound;
import com.AirLine.Flight.model.Passenger;
import com.AirLine.Flight.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/airline/passenger")

public class PassengerController {

    @Autowired
    private PassengerRepository passengerRepository;



    @GetMapping
    public List<Passenger> getAllPassenger(){
        return passengerRepository.findAll();
    }



    @PostMapping("/ADDpassengers")
    public Passenger createPassenger(@RequestBody Passenger passenger){
        return passengerRepository.save(passenger);
    }



    @GetMapping("/GetIdpassengers/{id}")
    public ResponseEntity<Passenger> getPassengerById(@PathVariable Long id){
        Passenger passenger=passengerRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Passenger not exist with id:"+id));
        return ResponseEntity.ok(passenger);
    }



    @PutMapping("/Updatepassengers/{id}")
    public ResponseEntity<Passenger> updatePassenger(@PathVariable Long id,@RequestBody Passenger passengerDetails){
        Passenger passenger=passengerRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Passenger not exist with id:"+id));
        passenger.setPassengerName(passengerDetails.getPassengerName());
        passenger.setPassengerNationality(passengerDetails.getPassengerNationality());
        passenger.setPassengerGender(passengerDetails.getPassengerGender());
        passenger.setPassengerNumPassport(passengerDetails.getPassengerNumPassport());
        passenger.setPassengerEmail(passengerDetails.getPassengerEmail());
        passenger.setPassengerAdress(passengerDetails.getPassengerAdress());
        passenger.setPassengerPhone(passengerDetails.getPassengerPhone());
        Passenger updatePassenger=passengerRepository.save(passenger);
        return ResponseEntity.ok(updatePassenger);
    }



    @DeleteMapping("/Deletepassengers/{id}")
     public ResponseEntity<HttpStatus> deletePassenger(@PathVariable Long id){
        Passenger passenger=passengerRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Passenger not exist with id:"+id));
        passengerRepository.delete(passenger);
        return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
    }





    @PostMapping("/NEWpassengers")
    Passenger newPassenger(@RequestBody Passenger newPassenger) {
        return passengerRepository.save(newPassenger);
    }

    @GetMapping("/NEWALLpassengers")
    List<Passenger> getallpassengers() {
        return passengerRepository.findAll();
    }



















































}
