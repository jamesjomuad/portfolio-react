import React from 'react';
import ProjectCard from '../components/projectCard';
import axios from 'axios';
import Loader from '../components/loader';

export default class Projects extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      projects: []
    };
  }

  componentDidMount(){
    axios.get('/data/projects/data.json')
    .then(res => {
      let self = this;
      setTimeout(() => {
        self.setState({ 
          projects:res.data,
          isLoaded: true 
        });
      }, 800);
    });
  }

  render() {
    if(!this.state.isLoaded)
    return <Loader/>

    return (
      <>
        <header className="animated fadeInDown">
          <h1>Projects</h1>
        </header>

        <div className="content">
          <div className="row d-flex flex-wrap">
            {
              this.state.projects.map((value, index) => {
                return <ProjectCard key={index} data={value}/>
              })
            }
          </div>
        </div>
      </>
    );
  }

}
