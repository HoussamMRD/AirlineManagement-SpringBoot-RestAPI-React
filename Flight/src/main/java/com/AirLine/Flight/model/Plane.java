package com.AirLine.Flight.model;

import lombok.*;


import jakarta.persistence.*;


@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
public class Plane {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long planeId;

        @Column(name = "plane_name")
        private String planeName;

        @Column(name = "plane_series")
        private String planeSeries;

        @Column(name = "plane_capacity")
        private int planeCapacity;



        @Override
        public String toString() {
                return planeName;
        }







}
