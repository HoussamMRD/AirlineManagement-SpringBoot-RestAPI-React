package com.AirLine.Flight;


import com.AirLine.Flight.model.Passenger;
import com.AirLine.Flight.model.Pilot;
import com.AirLine.Flight.model.Plane;
import com.AirLine.Flight.repository.PassengerRepository;
import com.AirLine.Flight.repository.PilotRepository;
import com.AirLine.Flight.repository.PlaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlightApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FlightApplication.class, args);
	}


	@Autowired
	private PlaneRepository planeRepository;

	@Autowired
	private PassengerRepository passengerRepository;


	@Autowired
	private PilotRepository pilotRepository;


	@Override
	public void run(String... args) throws Exception {
		Plane plane1=new Plane();
		plane1.setPlaneName("Boeing");
		plane1.setPlaneSeries("737");
		plane1.setPlaneCapacity(500);
		planeRepository.save(plane1);




		Passenger passenger1=new Passenger();
		passenger1.setPassengerName("Mohamed");
		passenger1.setPassengerNationality("Tunisian");
		passenger1.setPassengerGender("M");
		passenger1.setPassengerNumPassport("EF0GH7");
		passenger1.setPassengerEmail("mo@gmail.com");
		passenger1.setPassengerAdress("MHAMMADIA");
		passenger1.setPassengerPhone("07134562");
		passengerRepository.save(passenger1);

		Passenger passenger2=new Passenger();
		passenger2.setPassengerName("FC-007");
		passenger2.setPassengerNationality("Houssam");
		passenger2.setPassengerGender("Boeing");
		passenger2.setPassengerNumPassport("1000dh");
		passenger2.setPassengerEmail("Paris-12:00 AM");
		passenger2.setPassengerAdress("London-12:00 PM");
		passenger2.setPassengerPhone("Eco-34");
		passengerRepository.save(passenger2);





		Pilot pilot1=new Pilot();
		pilot1.setPilotName("Houssam");
		pilot1.setPilotRank("Captain");
		pilot1.setPilotLicense("AG76IF");
		pilot1.setPlane(plane1);
		pilotRepository.save(pilot1);



	}






















}
