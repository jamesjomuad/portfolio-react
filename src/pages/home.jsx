import React from 'react';
import './home.css';

export default class Skills extends React.Component { 

  render() {
    return (
      <>
        <header id="intro" className="fadeInDown animated">
          <h1>
            <span>James <span>Jomuad</span></span>
          </h1>
          <strong>Independent Fullstack Web Developer</strong>
        </header>

        <div className="content fadeInUp animated">
          <p>I build Web Application system like online booking, invoicing and ecommerce. I have worked in different types of industries, but I focused on web application/software development. Learning the latest technologies in writing software is my hobby. I'm passionate on my works with the goal to make clients happy and satisfied. I have done 800 websites on the previous years. I take my inspiration and passion from my environments & colleague. I can bring things from nothing into something.</p>

          <p>With a strong core skills in Nodejs, Laravel, Octobercms, and Wordpress. Developing applications to contribute to organisations betterment.</p>

          <p>Wanna Know My Secret?? <b>Press CTRL+A</b> </p>
        </div>

        <div className="spacing-2"></div>

        <div className="content animated fadeInUp delay-1s">
          <h3 style={{fontSize:'60px',fontWeight: '800',color:'#FFFEF6'}}>
            "MAKE YOUR MAMA PROUD"
          </h3>
        </div>
        
      </>
    );
  }
}