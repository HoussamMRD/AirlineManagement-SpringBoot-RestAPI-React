package com.AirLine.Flight.controller;


import com.AirLine.Flight.exception.RessourceNotFound;
import com.AirLine.Flight.model.Plane;
import com.AirLine.Flight.repository.PlaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/airline")
public class PlaneController {


    @Autowired
    private PlaneRepository planeRepository;

    @GetMapping
    public List<Plane> getAllPlane(){
        return planeRepository.findAll();
    }


    //build create plane REST API
    @PostMapping("/ADDplanes")
    public Plane createPlane(@RequestBody Plane plane){
        return planeRepository.save(plane);
    }


    //build get plane by id REST API
    @GetMapping("/GetIdplanes/{id}")
    public ResponseEntity<Plane> getPlaneById(@PathVariable Long id){
        Plane plane=planeRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Plane not exist with id:"+id));
        return ResponseEntity.ok(plane);
    }


    //build update plane REST API
    @PutMapping("/Updateplanes/{id}")
public ResponseEntity<Plane> updatePlane(@PathVariable Long id,@RequestBody Plane planeDetails){
        Plane plane=planeRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Plane not exist with id:"+id));
        plane.setPlaneName(planeDetails.getPlaneName());
        plane.setPlaneSeries(planeDetails.getPlaneSeries());
        plane.setPlaneCapacity(planeDetails.getPlaneCapacity());
        Plane updatePlane=planeRepository.save(plane);
        return ResponseEntity.ok(updatePlane);
    }


    //build delete plane REST API
    @DeleteMapping("/Deleteplanes/{id}")
    public ResponseEntity<HttpStatus> deletePlane(@PathVariable Long id){
        Plane plane=planeRepository.findById(id)
                .orElseThrow(()->new RessourceNotFound("Plane not exist with id:"+id));
        planeRepository.delete(plane);
        return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
    }





    @PostMapping("/planes")
    Plane newPlane(@RequestBody Plane newPlane) {
        return planeRepository.save(newPlane);
    }

    @GetMapping("/ALLplanes")
    List<Plane> getallplanes() {
        return planeRepository.findAll();
    }



}
