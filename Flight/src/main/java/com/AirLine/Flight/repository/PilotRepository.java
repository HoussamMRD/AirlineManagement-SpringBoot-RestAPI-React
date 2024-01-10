package com.AirLine.Flight.repository;

import com.AirLine.Flight.model.Pilot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PilotRepository extends JpaRepository<Pilot, Long> {
}
