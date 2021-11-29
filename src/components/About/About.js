import React, { useEffect } from 'react';
import './About.css'
import profile from '../../image/taher-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div style={{overflowX:'hidden'}} className='container pt-5' id='about'>
            <div className="text-center">
                <h2 className="text-white fw-bold mt-3"><span className='green-effect'>About</span> Me</h2>
                <img data-aos='fade-right' className='profile-pic rounded-circle mt-3' src={profile} height="300px" alt="" />
            </div>
            <div data-aos='fade-left' style={{ width: '60%', margin: '0 auto' }} className='text-white text-justify mt-3 pb-3'>
                <p className="">Hello , I'm Abu Taher. I am a Junior web developer. I love to learn new technologies.My core skill is based on React and I love to do most of the things using React.js. I am currently a student of Islamia Degree College </p>
            </div>
            <div className="text-center pb-5">
                <h4 className="text-white">Follow me</h4>
                <div className="icon-container">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100015179167735" className="me-2"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a target="_blank" href="https://github.com/Abutaherrisat" className="me-2"><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/abu-taher-risat/" className="me-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <Link className="btn btn-outline-success" to="skills">MY Skills</Link>
            </div>
        </div>
    );
};

export default About;