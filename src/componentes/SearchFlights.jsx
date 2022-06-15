import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlightList from './FlightList';

export default function SearchFlights(){
    return(
        <>
        <Row>
            <Col className="col pb-4 text-center border ">
                <h1>Search Flights</h1>
            </Col>
        </Row>
        <FlightList />
        </>
    );
}
