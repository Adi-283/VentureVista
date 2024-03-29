
import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/bali.jpg';
import heroImg01 from '../assets/images/heroimg1.jpg';
import heroImg02 from '../assets/images/heroimg2.jpg';
// import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.jpg';
import experienceImg from '../assets/images/experience.png';
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



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
                            <img src={heroImg01} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    { <SearchBar /> }
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
        { /* ======================= Featured Tour section start  ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Explore'}></Subtitle>
                        <h2 className="featured__tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>
        { /* ======================= Featured Tour section end ================= */}
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
        <section>
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
        </section>

        { /* ======================= testimonial section end ================= */}
        {/* < Newsletter /> */}
    </>
    
};

export default Home;