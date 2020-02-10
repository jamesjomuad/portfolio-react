import React from 'react';
import './skills.css';
import ProgressCard from '../components/progressCard';

export default class Skills extends React.Component { 

  render() {
    return (
      <>
        <header className="animated fadeInDown">
          <h1>SKILLS</h1>
        </header>
        
        <br className="clr"/>
        <div className="col-md-12 content fadeInUp animated">
          
          <div className="row">
            <div className="col-md-12">
              <h2>Design Skills</h2>
              <ProgressCard title="Illustrator" score="90%"/>
              <ProgressCard title="Photoshop" score="100%"/>
              <ProgressCard title="UI/UX Design" score="90%"/>
            </div>
            
            <div className="spacing-3"></div>

            <div className="col-md-12">
              <h2>Languages</h2>
              <ProgressCard title="HTML" score="100%"/>
              <ProgressCard title="CSS" score="100%"/>
              <ProgressCard title="NodeJS" score="90%"/>
              <ProgressCard title="Javascript" score="99%"/>
              <ProgressCard title="PHP" score="95%"/>
              <ProgressCard title="SQL" score="90%"/>
            </div>

            <div className="spacing-3"></div>

            <div className="col-md-12">
              <h2>Libraries/Frameworks</h2>
              <ProgressCard title="React" score="80%"/>
              <ProgressCard title="Vue" score="85%"/>
              <ProgressCard title="Angular" score="90%"/>
              <ProgressCard title="Electron" score="75%"/>
              <ProgressCard title="Laravel" score="95%"/>
              <ProgressCard title="Wordpress" score="90%"/>
              <ProgressCard title="Octobercms" score="100%"/>
              <ProgressCard title="jQuery" score="100%"/>
            </div>
          </div>
          <div className="spacing-3"></div>
          <h2>Technologies:</h2>
          <div id="logos">
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-vuejs-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-angularjs-plain"></i>
            <i className="devicon-jquery-plain"></i>
            <i className="devicon-php-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-amazonwebservices-original"></i>
            <i className="devicon-mysql-plain"></i>
            <i className="devicon-laravel-plain"></i>
            <i className="devicon-wordpress-plain"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-less-plain-wordmark"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-linux-plain"></i>
            <i className="devicon-typescript-plain"></i>
            <i className="devicon-photoshop-plain"></i>
            <i className="devicon-illustrator-line"></i>
            <i className="devicon-apache-line-wordmark"></i>
            <i className="devicon-php-plain"></i>
            <i className="devicon-slack-plain"></i>
            <i className="devicon-symfony-original"></i>
            <i className="devicon-visualstudio-plain"></i>
          </div>
  
        </div>
      </>
    );
  }

}