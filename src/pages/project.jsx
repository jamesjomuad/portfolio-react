import React from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';

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

    if(project)
    return (
      <>
        <header className="animated fadeInDown">
          <h1>{project.title}</h1>
        </header>

        <div className="content animated fadeInUp">
          {Parser(project.description)}
        </div>
      </>
    );

    return <h2>Loading...</h2>
  }

}
