
import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/heroimg1.jpg'
import heroImg02 from '../assets/images/heroimg2.jpg'
// import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.jpg'
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";


const Home = () => {
    return <> 
        { /* ======================= Hero Section Start ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to creating <span className="highlights">memories</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque a ab libero. 
                                Inventore nemo deserunt recusandae exercitationem qui, provident, aut, totam laborum 
                                pariatur atque sed veniam? Deserunt, earum reprehenderit.
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    <SearchBar />
                </Row>
            </Container>
        </section>
        { /* ======================= Hero Section Start ================= */}

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">
                            what we serve
                        </h5>
                        <h2 className="services__title">
                            we offer our best services
                        </h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
    </>
    
};

export default Home;