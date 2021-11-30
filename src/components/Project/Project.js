import React, { useEffect, useState } from 'react';
import './Project.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import Projects from '../Projects/Projects';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Project = ({ project, handleClick }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div data-aos='flip-left' className='project-card text-center m-4'>
                <img width='300px' height='430px' src={project.img} alt="" />
                <h3 className='text-white pt-4'>{project.title}</h3>
                <p className='text-white pt-4'>{project.description}</p>
                <a className='green-btn btn me-2' target="_blank" rel="noreferrer" href={project.live}>Live</a>
                <a className='green-btn btn me-2' target="_blank" rel="noreferrer" href={project.client}>Client</a>
                {
                    project.server && <a className='green-btn btn' target="_blank" rel="noreferrer" href={project.server}>Server</a>
                }
                <Link className='green-btn btn me-2' to={`/details/${project.id}`}>Details</Link>
            </div>
            <div>
            </div>

        </div>
    );
};

export default Project;