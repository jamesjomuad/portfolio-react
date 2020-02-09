import React from 'react';
import { Link } from 'react-router-dom'
import './projectCard.css';

export default class ProjectCard extends React.Component { 

  render() {
    return (
      <>
        <div className="project d-flex p-2 col-sm-6 col-md-4">
          <div className="card p-0">
            {this.props.image ? <img className="card-img-top" src={this.props.image} alt="Card image cap"/>:''}
            <div className="card-body animated fadeIn">
              <div className="d-flex justify-content-center align-items-center" style={{'height':'100%'}}>
                {this.props.title ? <Link className="card-title" to={'/project/'+this.props.id}>{this.props.title}</Link> : ''}
              </div>
            </div>
          </div>
        </div>
      </>
    );
    
  }

}