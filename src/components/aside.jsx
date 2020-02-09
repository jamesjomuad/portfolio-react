import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonGroup} from 'react-bootstrap';
import logo from '../images/profile.jpg';

function aside(){
  return (
    <>
      <div id="sidebar">
        <h1 id="brand" className="text-center">
          <a href="/" rel="noopener noreferrer">
            <img src={logo} alt=""/>
          </a>
        </h1>
        
        <div id="nav">
          <ButtonGroup vertical>
            <Link className="btn btn-primary" to='/'>HOME</Link>
            <Link className="btn btn-primary" to='/skills'>SKILLS</Link>
            <Link className="btn btn-primary" to='/awards'>AWARDS</Link>
            <Link className="btn btn-primary" to='/projects'>PROJECTS</Link>
            <Link className="btn btn-primary" to='/experience'>EXPERIENCE</Link>
            <Link className="btn btn-primary" to='/contact'>CONTACT</Link>
          </ButtonGroup>
        </div>

        <div className="social animated fadeInUp delay-1s">
          <a href="https://www.linkedin.com/in/jamesjomuad" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/jomuadjames/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        </div>

        <a className="btn btn-info download animated fadeInUp delay-2s" href="https://drive.google.com/open?id=1ccr-ezxLcXc7p4ZgqS9xz9621VlvMlBRXTE6iLcc_xQ" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
    </>
  )
}

export default aside;