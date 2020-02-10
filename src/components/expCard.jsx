import React from 'react';
import Parser from 'html-react-parser';
import './expCard.css';

export default class Exp extends React.Component { 

  render() {
    let value = this.props.value;
    return (
      <>
        <div className="card arrow_box mb-5">
            <div className="point"></div>
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <small>{value.company}</small>
              <br className="clr"/>
              <p className="card-text">{Parser(value.description)}</p>
            </div>
            <div class="card-footer text-muted text-center">{value.date}</div>
        </div>
      </>
    );
  }

}