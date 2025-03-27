import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';
import './Testimonials.css';

const Testimonails = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3, // Default for desktop
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 576, // For mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            image: ava01,
            name: 'David',
            role: 'Customer',
            review: 'Elevated my journey with seamless experiences and unforgettable adventures. Exceptional!',
            rating: 5,
        },
        {
            image: ava02,
            name: 'Raxy',
            role: 'Customer',
            review: 'Transformed my journey with seamless planning, unforgettable experiences. Awe-inspiring adventure!',
            rating: 4,
        },
        {
            image: ava03,
            name: 'Praxy',
            role: 'Customer',
            review: 'Unforgettable journeys with exceptional service; the ultimate travel companions. Highly recommend!',
            rating: 5,
        },
     
        {
            image: ava05,
            name: 'Roxan',
            role: 'Customer',
            review: 'Exceptional service, made our journey unforgettable. Highly recommend their expertise!',
            rating: 5,
        },
    ];

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div className="testimonial py-4 px-3" key={index}>
                    <p>{testimonial.review}</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img
                            src={testimonial.image}
                            className="w-25 h-25 rounded-2"
                            alt={`${testimonial.name}'s avatar`}
                        />
                        <div>
                            <h6 className="mb-0 mt-3">{testimonial.name}</h6>
                            <p className="customer-role">{testimonial.role}</p>
                            <div className="rating">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Testimonails;
