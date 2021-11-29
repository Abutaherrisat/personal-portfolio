import React, { useEffect } from 'react';
import Project from '../Project/Project';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
const projects = [{
    id:'1a',
    title:'Tour Booking',
    description: 'It is a MERN stack web application where you can book tour places online easily. If you click on book now button you will be redirected to login page and after login you can book places, can see your order as a consumer and you can add, manage product to your shop as an admin.',
    img: 'https://i.ibb.co/kHjnSjY/screencapture-tourism-related-website-50481-web-app-2021-11-29-15-13-57.png',
    live: 'https://tourism-related-website-50481.web.app/',
    client: 'https://github.com/Abutaherrisat/toor-booking-client',
    server: 'https://github.com/Abutaherrisat/tour-booking-server'
},
{
    id:'2a',
    title:'Car Shop',
    description: 'It is a MERN stack web application where you can buy car  online easily. If you click on buy now button you will be redirected to login page and after login you can buy cars,you can see your order as a consumer and you can add, manage product to your shop as an admin.',
    img: 'https://i.ibb.co/R2nVNHc/screencapture-car-point-806ab-web-app-2021-11-29-15-11-39.png',
    live: 'https://car-point-806ab.web.app/',
    client: 'https://github.com/Abutaherrisat/car-shop-client',
    server: 'https://github.com/Abutaherrisat/car-shop-server'
},
{
    id:'3a',
    title:'Medicine Care',
    description: 'This website will help to select you favourate medicine according to you budget. All medicine will be shown at the home page. you can choose one medicine according to your budget',
    img: 'https://i.ibb.co/MpBbJ26/screencapture-health-care-f0ddd-web-app-2021-11-29-14-53-44.png',
    live: 'https://health-care-f0ddd.web.app/',
    client: 'https://github.com/Abutaherrisat/health-care',
    server: ''

}
]
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    return (
        <div data-aos="fade-right" style={{overflowX:'hidden'}} id='projects' className='pt-5 pb-5'>
            <h2  className='text-white text-center mt-5 mb-5 fw-bold'>My <span className='green-effect'>Projects</span></h2>
            <div className='project-container'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;