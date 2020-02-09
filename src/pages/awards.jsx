import React from 'react';
import AwardCard from '../components/awardCard';
import axios from 'axios';
import './awards.css';

export default class Award extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      awards: []
    };
  }

  componentDidMount(){
    axios.get('/data/awards/_data.json')
    .then(res => {
        this.setState({ awards:res.data,isLoading: false });
    });
  }

  render() {
    return (
      <>
        <header className="animated fadeInDown">
          <h1>AWARDS and CERTS</h1>
        </header>

        <div className="content animated fadeInUp">
          <div className="row">
            <ul id="cardList" style={{width:'100%'}}>
              {
                this.state.awards.map((value, index) => {
                  return <li><AwardCard key={index} title={value.title} subtitle={value.subtitle} date={value.date} src={value.src}/></li>
                })
              }
            </ul>
          </div>
        </div>
      </>
    );
  }

}
