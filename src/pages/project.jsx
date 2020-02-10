import React from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import Loader from '../components/loader';
import './project.css';

export default class Project extends React.Component{

  state = {
    isLoading: true,
    project: null
  }

  componentDidMount(){
    axios.get('/data/projects/_data.json')
    .then(res => {
      const { id } = this.props.match.params;
      this.setState({ project:res.data[id],isLoading: false });
    });
  }

  render() {
    let project = this.state.project;
    
    if(project){
      return (
        <>
          <header className="animated fadeInDown">
            <h1>{project.title}</h1>
          </header>

          <div id="projects" className="content animated fadeInUp">
            {(typeof project.url == 'string') ? (
              <>
                <p><b>Project URL</b>: <a href={project.url} rel="noopener noreferrer" target='_blank'>{project.url}</a></p>
              </>
            ) : ''}

            {(project.description) ? Parser(project.description):''}

            <div className="spacing-2"></div>
            { (project.tags instanceof Array) ? (
              <> 
                <h2>Tags:</h2>
                <div className="spacing-1"></div>
                {
                  project.tags.map((value, index) => {
                    return <span className="badge badge-primary mr-2">{value}</span>
                  })
                }
              </>
            ) : ''}

            <div className="spacing-4"></div>

            <div className="gallery row">
              {
                project.images.map((value, index) => {
                  return <div className="col-md-3"><a href={value} className="fancybox" data-fancybox="gallery"><img src={value} className="rounded mx-auto d-block" alt={value}/></a></div>
                })
              }
            </div>
            
          </div>
        </>
      );
    }

    return <Loader/>
  }

}
