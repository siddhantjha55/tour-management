import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg  from '../assets/images/customization.png'



const servicesData = [
    {
        "imgUrl": weatherImg,
        "title": "Calculate Weather",
        "desc": "Get accurate forecasts and weather insights at your fingertips."
    },
    {
        "imgUrl": guideImg,
        "title": "Best Tour Guide",
        "desc": "Discover top-rated guides to elevate your travel experience."
    },
    {
        "imgUrl": customizationImg,
        "title": "Customization",
        "desc": "Tailor services and features to fit your unique needs perfectly."
    }
]




const ServiceList = () =>
{
    return (
        <>
            {
                servicesData.map((item, index) =>
                (<Col lg='3' md='6' sm='12' className='mb-4'
                    key={ index }>
                    <ServiceCard item={ item } />
                </Col>
                ))}
        </>
    );
};


export default ServiceList;