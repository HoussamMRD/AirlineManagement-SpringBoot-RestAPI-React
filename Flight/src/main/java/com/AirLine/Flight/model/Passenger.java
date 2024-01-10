package com.AirLine.Flight.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table

public class Passenger {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passengerId;

    @Column(name = "passenger_name")
    private String passengerName;

    @Column(name = "passenger_Nationality")
    private String passengerNationality;

    @Column(name = "passenger_Gender")
    private String passengerGender;

    @Column(name = "passenger_NumPassport")
    private String passengerNumPassport;


    @Column(name = "passenger_email")
    private String passengerEmail;


    @Column(name = "passenger_Adress")
    private String passengerAdress;

    @Column(name = "passenger_phone")
    private String passengerPhone;






}
