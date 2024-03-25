
import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import experienceImg from '../assets/images/about1.png';
import Subtitle from "../shared/Subtitle";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const About = () => {
    return <> 
        { /* ======================= Experience section start ================= */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With our all experience <br /> we will serve you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quis. Voluptatum fuga reprehenderit autem nisi eveniet rem labore consectetur aut possimus ab dicta, illo eos optio a iusto exercitationem! Doloribus.</p>
                        </div>

                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>


                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



        { /* ======================= Experience section end ================= */}

        { /* ======================= gallery section Start ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Gallery"} />
                        <h2 className="gallery__title">
                            Visit our customer's tour gallery
                        </h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>
        { /* ======================= gallery section end ================= */}

        { /* ======================= testimonial section Start ================= */}
        {/* <section>
            <Container>
                <Row>
                    <Col lg = '12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial__title">What our Fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section> */}

        { /* ======================= testimonial section end ================= */}
        {/* < Newsletter /> */}
    </>
    
};

export default About;