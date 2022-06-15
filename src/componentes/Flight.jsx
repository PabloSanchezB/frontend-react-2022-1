import React from 'react'
import {Col, Row} from 'react-bootstrap'

const Flight=(props)=>{
    const{departure_date, arrival_date, departure_airport_code, arrival_airport_code,
        ticket_price, ticket_currency, flight_number}=props.vuelo

    return(
        <div className="item">
            <Row className="">
                <Col className="text-start">
                <h6>DEPARTURE</h6>
                </Col>
                <Col className="text-start">
                <h5>{departure_date}</h5>
                </Col>
            </Row>
            <Row className="">
                <Col className="text-start">
                <h6>ARRIVAL</h6>
                </Col>
                <Col className="text-start">
                <h5>{arrival_date}</h5>
                </Col>
            </Row>
            <Row className="">
                <Col className="text-start">
                <span>Departs from:</span>
                </Col>
                <Col className="text-start">
                <h6>{departure_airport_code}</h6>
                </Col>
            </Row>
            <Row className="">
                <Col className="text-start">
                <span>Arrives to:</span>
                </Col>
                <Col className="text-start">
                <h6>{arrival_airport_code}</h6>
                </Col>
            </Row>
            <Row className="">
                <Col className="text-start">
                <span>{ticket_price}</span><span>&nbsp;</span><span>{ticket_currency}</span>
                </Col>
                <Col className="text-start">
                <span>Flight</span><span>&nbsp;</span><span>{flight_number}</span>
                </Col>
                <Col><span>___________________________</span></Col>
            </Row>
        </div>
        
    );
}
export default Flight;