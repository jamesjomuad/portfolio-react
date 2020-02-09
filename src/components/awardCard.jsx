import React from 'react';
import './awardCard.css';

export default class awardCard extends React.Component { 

  render() {
   let Title = this.props.title ? <h3 className="mb-0">{this.props.title}</h3> : '';
   let Subtitle = this.props.subtitle ? <h4 className="mb-0">{this.props.subtitle}</h4> : '';
   let Date = this.props.date ? <div className="mb-1 text-muted">{this.props.date}</div> : '';

    return (
      <>
        <div className="award p-2 col-12">
          <div className="card d-flex flex-md-row mb-4 box-shadow">
            <div className="card-body d-flex flex-column align-items-start">
              {Title}
              {Subtitle}
              {Date}
            </div>
            <a href={this.props.src} className="fancybox" data-fancybox="gallery">
              <img src={this.props.src} className="img-responsive img-fluid z-depth-1 m-4" alt={Title}/>
            </a>
          </div>
        </div>
      </>
    );
    
  }
}