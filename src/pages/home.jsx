import React from 'react';
import './home.css';

export default class Skills extends React.Component { 

  componentDidMount() {

  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

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
          <p>I'm a Full Stack Web developer with almost 8+ years of experience.</p>

          <p>I have worked in different types of industries, but I focused on web application/software development. I am passionate about knowing the latest technologies in software applications like Progressive Web Applications. I have done 400 wordpress websites on the previous years. I take my inspiration and passion from my environments & colleague. I'm eager to learn new technologies in the internet. I can bring things from nothing into something.</p>

          <p>With a strong core skills in Nodejs, Laravel, Octobercms, and Wordpress. Developing applications to contribute to organisations betterment.</p>
        </div>
      </>
    );
  }
}