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

public class Pilot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pilotId;

    @Column(name = "pilot_name")
    private String pilotName;


    @Column(name = "pilot_rank")
    private String pilotRank;

    @Column(name = "pilot_license")
    private String pilotLicense;

    @ManyToOne()
    @JoinColumn(name = "plane_name")
    private Plane plane;
















}
