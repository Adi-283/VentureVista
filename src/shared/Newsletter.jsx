import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/world.jpg'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'></input>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur eveniet non deserunt optio? Deleniti rem suscipit, 
                        nam dolores labore quod harum mollitia ipsam modi aliquid distinctio 
                        tempore placeat reprehenderit possimus.
                    </p>
                </div>
            </Col>
            <Col className='newsletter__img'>
                <img src={maleTourist} alt="" />
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter