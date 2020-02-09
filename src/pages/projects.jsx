import React from 'react';
import ProjectCard from '../components/projectCard';
import axios from 'axios';

export default class Award extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projects: []
    };
  }

  componentDidMount(){
    axios.get('/data/projects/_data.json')
    .then(res => {
        this.setState({ projects:res.data,isLoading: false });
    });
  }

  render() {
    return (
      <>
        <header className="animated fadeInDown">
          <h1>Projects</h1>
        </header>

        <div className="content">
          <div className="row d-flex flex-wrap">
            {
              this.state.projects.map((value, index) => {
                let image = (typeof value.images == 'object') ? value.images[0] : false;
                return <ProjectCard key={index} id={index} title={value.title} image={image}/>
              })
            }
          </div>
        </div>
      </>
    );
  }

}
