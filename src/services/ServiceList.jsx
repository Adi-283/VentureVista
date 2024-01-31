

import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/heroimg1.jpg'
import guideImg from '../assets/images/heroimg1.jpg'
import customizationImg from '../assets/images/heroimg1.jpg'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "lorem ipsum"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "lorem ipsum"
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "lorem ipsum"
    },
]

const ServiceList = () => {
    return (
        <>
        {servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
        </>
    );
};

export default ServiceList