import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';

export default class ProjectCard extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.thumb = (typeof this.data.images == 'object') ? this.data.images[0] : false;
  }

  componentDidMount(){
    if(window.$)
    window.$('.lazy').Lazy();
  }

  render() {
    if(this.data){
      return (
        <>
          <div className="project d-flex p-2 col-sm-6 col-md-4">
            {this.data.sale ? <span className="sale">FOR SALE</span> : ''}
            <div className="card p-0">
              {
                (window.$) ? 
                <img className="card-img-top lazy" data-src={this.thumb} alt={this.data.title}/> :
                <img className="card-img-top lazy" src={this.thumb} alt={this.data.title}/>
              }
              <div className="card-body animated fadeIn">
                <div className="d-flex justify-content-center align-items-center" style={{'height':'100%'}}>
                  {this.data.title ? <Link className="card-title" to={'/project/'+this.data.id} rel="noopener noreferrer">{this.data.title}</Link> : ''}
                </div>
              </div>
              <div className="card-footer" style={{background:'none'}}>
                {
                  (this.data.tags) ? this.data.tags.map((value, index) => {
                    return <span key={index} className="badge badge-danger pull-left mr-1">{value}</span>
                  }) : ""
                }
              </div>
            </div>
          </div>
      </>
      );
    }
  }

}