import React from 'react';



import { useParams } from 'react-router';


const projects = [{
    id: '1a',
    title: 'Tour Booking',
    description: 'It is a MERN stack web application where you can book tour places online easily. If you click on book now button you will be redirected to login page and after login you can book places, can see your order as a consumer and you can add, manage product to your shop as an admin.you can see your order as a consumer and you can add, manage product to your shop as an admin.Used Material Ui, Bootstrap and CSS3 for design',
    img1: 'https://i.ibb.co/kHjnSjY/screencapture-tourism-related-website-50481-web-app-2021-11-29-15-13-57.png',
    img2: "https://i.ibb.co/CK2yBWh/screencapture-tourism-related-website-50481-web-app-login-2021-11-30-21-38-55.png",
    img3: "https://i.ibb.co/QcYYW9d/screencapture-tourism-related-website-50481-web-app-myorder-2021-11-30-21-40-06.png",
    img4: 'https://i.ibb.co/BNJ9WSZ/screencapture-tourism-related-website-50481-web-app-addservice-2021-11-30-21-41-09.png',
    live: 'https://tourism-related-website-50481.web.app/',
    client: 'https://github.com/Abutaherrisat/toor-booking-client',
    server: 'https://github.com/Abutaherrisat/tour-booking-server'
},
{
    id: '2a',
    title: 'Car Shop',
    description: 'It is a MERN stack web application where you can buy car  online easily. If you click on buy now button you will be redirected to login page and after login you can buy cars. you can see your order as a consumer and you can add, manage product to your shop as an admin.Used Material Ui, Bootstrap and CSS3 for design'
    ,
    img1: 'https://i.ibb.co/R2nVNHc/screencapture-car-point-806ab-web-app-2021-11-29-15-11-39.png',
    img2: 'https://i.ibb.co/nngRm9F/screencapture-car-point-806ab-web-app-booking-618bdf733a94d9a352194e18-2021-11-30-21-34-36-1.png',
    img3: 'https://i.ibb.co/k5D94Fd/screencapture-car-point-806ab-web-app-dashboard-2021-11-30-21-36-38.png',
    img4: 'https://i.ibb.co/bJ4wR0T/screencapture-car-point-806ab-web-app-login-2021-11-30-21-37-36.png',
    live: 'https://car-point-806ab.web.app/',
    client: 'https://github.com/Abutaherrisat/car-shop-client',
    server: 'https://github.com/Abutaherrisat/car-shop-server'
},
{
    id: '3a',
    title: 'Medicine Care',
    description: 'This website will help to select you favourate medicine according to you budget. All medicine will be shown at the home page. you can choose one medicine according to your budget',
    img1: 'https://i.ibb.co/MpBbJ26/screencapture-health-care-f0ddd-web-app-2021-11-29-14-53-44.png',
    img2: 'https://i.ibb.co/KGk5k2K/screencapture-health-care-f0ddd-web-app-login-2021-11-30-21-42-21.png',
    img3: 'https://i.ibb.co/q993Xf0/screencapture-health-care-f0ddd-web-app-contact-2021-11-30-21-43-40.png', img4: 'https://i.ibb.co/Pj630FN/screencapture-health-care-f0ddd-web-app-about-2021-11-30-21-44-26.png',
    live: 'https://health-care-f0ddd.web.app/',
    client: 'https://github.com/Abutaherrisat/health-care',
    server: ''

}
];
const Details = () => {
    const { projectId } = useParams()
    const selectedProject = projects.find(project => project.id === projectId)
    console.log(selectedProject);

    return (
        <div>
            <h1 className="text-center text-white pt-4">{selectedProject.title}</h1>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" style={{ justifyContent: 'center' }}>
                    <div class="carousel-item active text-center">
                        <img src={selectedProject.img1} class="w-50" alt="..." />
                    </div>
                    <div class="carousel-item text-center">
                        <img src={selectedProject.img2} class=" w-50" alt="..." />
                    </div>
                    <div class="carousel-item text-center">
                        <img src={selectedProject.img3} class=" w-50" alt="..." />
                    </div>
                    <div class="carousel-item text-center">
                        <img src={selectedProject.img4} class=" w-50" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div>
                    <p className='text-center text-white pt-4 w-100'> {selectedProject.description}</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '50px' }}>
                    <a className='green-btn btn me-2' target="_blank" rel="noreferrer" href={selectedProject.live}>Live</a>
                    <a className='green-btn btn me-2' target="_blank" rel="noreferrer" href={selectedProject.client}>Client</a>
                    {
                        projectId.server && <a className='green-btn btn' target="_blank" rel="noreferrer" href={projectId.server}>Server</a>
                    }
                </div>
            </div>
            <div>
            </div>

        </div>
    );
};

export default Details;