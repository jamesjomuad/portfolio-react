import React from 'react';
import axios from 'axios';
import Loader from '../components/loader';
import './experience.css';
import Card from '../components/expCard';


export default class Experience extends React.Component { 

  state = {
    isLoading: true,
    experience: []
  };

  componentDidMount() {
    axios.get('/data/experience.json')
    .then(res => {
        this.setState({ experience:res.data,isLoading: false });
    });
  }

  render() {   
    if(!this.state.isLoading)
    return (
      <>
        <header className="animated fadeInDown">
          <h1>EXPERIENCE</h1>
        </header>

        <div className="spacing-3"></div>

        <div className="content fadeInUp animated">
          <div id="timeline">
            {
              this.state.experience.map((value, index) => {
                return <Card key={index} value={value}/>
              })
            }
          </div>
        </div>
      </>
    );

    return <Loader/>;
  }
}