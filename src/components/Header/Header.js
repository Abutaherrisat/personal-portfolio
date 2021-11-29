import React from 'react';
import './Header.css';
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <section style={{marginTop:'100px'}}className="header text-center">
            <h1 className="text-light">ABU <span className='green-effect'>TAHER</span></h1>
            <h3 className="text-white">I am a
                    <Typical className="green-effect" 
                    loop={Infinity} 
                    wrapper="b"
                    steps={[
                        ' Web Developer',
                        4000,
                        ' Tech Lover',
                        4000,
                        ' Programmer',
                        4000,
                        " Learner",
                        4000,
                        " Gamer",
                        3000
                    ]}
                    />
            </h3>
            <div>
                <a className="btn btn-outline-success" target="_blank" href="https://www.linkedin.com/in/abu-taher-risat/">Hire me </a>
                <a className="btn btn-success ms-2" target="_blank" href='https://drive.google.com/file/d/1NAfD6Hw1BooLHI5G2vYhKBy_6oW3BbLv/view'><FontAwesomeIcon icon={faFileDownload} /> Download Resume</a>
            </div>

        </section>
    );
};

export default Header;