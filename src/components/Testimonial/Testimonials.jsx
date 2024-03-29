import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/person.jpg';
import ava02 from '../../assets/images/person1.jpg';
import ava03 from '../../assets/images/person2.jpg';

const Testimonials = () => {
    
    const settings= {
        dots:true,
        isFinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                },
            },
        ]
    }
    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim laborum laudantium magnam, alias quasi libero? Blanditiis fugit accusantium dignissimos accusamus, quia rem repellat voluptates eveniet vel minus doloremque sapiente!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>john Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim laborum laudantium magnam, alias quasi libero? Blanditiis fugit accusantium dignissimos accusamus, quia rem repellat voluptates eveniet vel minus doloremque sapiente!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Chris lynn</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim laborum laudantium magnam, alias quasi libero? Blanditiis fugit accusantium dignissimos accusamus, quia rem repellat voluptates eveniet vel minus doloremque sapiente!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Franklin James</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

        </Slider>
    );
};
export default Testimonials;