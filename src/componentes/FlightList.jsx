import React, {useState} from "react";
import Flight from "./Flight";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from "./SearchForm";

export default function FlightList(){
    const flightsInitial = [
    ];

    const [flights, setFlights] = useState(flightsInitial);

    const [searchTerms, setSearchTerms] = useState({});

    const alEnviarForm = (itemFromForm) => {
        setSearchTerms(itemFromForm);
        async function fetchFlights(terms){
            let dac = terms.departureAP;
            let aac = terms.arrivalAP;
            let dd = terms.departureDate;
            let url = "https://air-booking-app.azurewebsites.net/catalog/?departureAirportCode="+dac+"&arrivalAirportCode="+aac+"&departureDate="+dd;
            try {
                const response = await fetch(url);
                if(response.ok){
                    const vuelos = await response.json();
                    setFlights(vuelos);
                }
                else if(response.status === 404){
                    setFlights([]);
                }
            } catch (error) {
                console.log("No se pudo hacer la petición")
            }
        };
        fetchFlights(searchTerms);
    }


    return (
        <Row>
            <Col className="col-4">
            <SearchForm enviar={alEnviarForm} />
            </Col>
            <Col className="col-8 border">
            <Row className="g-3">
            {
            
                flights.length > 0 ? flights.map(flight => (
                    <Col className="col-4">
                        <div className="border px-3 pt-2">
                        <Flight vuelo={flight}/> 
                        </div>
                    </Col>
                    )
                ):(<Col className="col-4"><h5>No flights found</h5></Col>)
            
            }
            </Row>
            </Col>
        </Row>
    );
}