import React from 'react';
import './progressCard.css';

export default class proggressCard extends React.Component { 

  render() {
    return (
      <>
        <div className="card points">
            <h5>{this.props.title}</h5>
            <label>{this.props.score}</label>
            <div className="progress">
            <div className="progress-bar" style={{width: this.props.score}} aria-valuenow="75" aria-valuemin="0"></div>
            </div>
        </div>
      </>
    );
  }

}