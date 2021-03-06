import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a style={{ cursor: 'pointer' }} className="navbar-brand text-white" onClick={() => { scroll.scrollToTop() }}>ABU <span className="text-color">TAHER</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse topbar" id="navbarNavAltMarkup">
                        <div className="ms-auto text-center navbar-nav">
                            {/* <a className="nav-link links active me-2 text-white" onClick={() => { scroll.scrollToTop() }}>Home</a> */}
                            <Link to='/about' className="nav-link links active me-2 text-white" to="about" smooth={true} duration={1000}>About</Link>
                            <Link to="/projects" className="nav-link links active me-2 text-white" to="projects" smooth={true} duration={1000}>Projects</Link>
                            <Link to='/blogs' className="nav-link links active me-2 text-white" to="blogs" smooth={true} duration={1000}>Blogs</Link>
                            <Link to='/contact' className="nav-link links active me-2 text-white" to="contact" smooth={true} duration={1000}>Contact</Link>
                            <div className="d-flex justify-content-center">
                                <a className="nav-link resume-btn"  rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1YdiSICNusV6WmQcNToioqYwkMuE0cWY_/view">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;