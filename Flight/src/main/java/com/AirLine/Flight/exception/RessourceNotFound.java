package com.AirLine.Flight.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RessourceNotFound extends RuntimeException{

    public RessourceNotFound(String message){
        super(message);
    }

}
