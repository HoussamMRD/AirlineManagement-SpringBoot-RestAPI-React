package com.AirLine.Flight.repository;

import com.AirLine.Flight.model.Plane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaneRepository extends JpaRepository<Plane, Long> {


}
