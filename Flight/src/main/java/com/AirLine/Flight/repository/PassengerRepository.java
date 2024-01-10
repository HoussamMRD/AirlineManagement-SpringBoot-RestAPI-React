package com.AirLine.Flight.repository;

import com.AirLine.Flight.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
}
