import React from "react";
import CommonSection from "../shared/CommonSection";
import '../styles/tour.css';
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import NewsLetter from './../shared/Newsletter';
import tourData from '../assets/data/tours';
import { Col, Container, Row } from "reactstrap";

const Tours = () => {
    return (
    <>
    < CommonSection title={'All Tours'}/>
    <section>
        <Container>
            <Row>
                <SearchBar />
            </Row>
        </Container>
        <Container>
            <Row>
                {
                    tourData ?.map(tour => 
                    <Col lg='3' key={tour.id}>
                        {"  "}
                    <TourCard tour={tour} />
                    </Col>)
                }
            </Row>
        </Container>
    </section>
    </>
    );
}

export default Tours;