import React from 'react';
import './skills.css';
import axios from 'axios';
import ProgressCard from '../components/progressCard';
import Loader from '../components/loader';


export default class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null
    };
  }

  componentDidMount(){
    axios.get('/data/skills.json')
    .then((res) => {
        let self = this;
        setTimeout(() => {
            self.setState({ 
                isLoaded: true,
                data: res.data
            });
        }, 500);
    })
    .catch(error=>{
        console.log(error)
    });
  }

  getCategories(){
    let sections = [];
    this.state.data.skills.forEach((v,k)=>{
        sections.push(v.category)
    })
    return [...(new Set(sections))];
  }

  getByCategory(category){
    let data = [];
    this.state.data.skills.forEach((v,k)=>{
        if(v.category===category){
            data.push(v)
        }
    })
    return data;
  }

  render() {
    if(!this.state.isLoaded)
    return <Loader/>;

    return (
      <>
        <header className="animated fadeInDown">
          <h1>SKILLS</h1>
        </header>
        
        <br className="clr"/>

        <div className="col-md-12 content fadeInUp animated">

            {
                this.getCategories().map((value, index) => {
                    return (
                        <>
                            <h2 key={'h2'+index}>{value}</h2>
                            {
                                this.getByCategory(value).map((obj, key) => {
                                    return <ProgressCard key={key} title={obj.title} score={obj.score}/>
                                })
                            }
                            <div className="spacing-3"></div>
                        </>
                    );
                })
            }


            <h2>Technologies:</h2>
            <div id="logos">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-vuejs-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-angularjs-plain"></i>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-amazonwebservices-original"></i>
                <i className="devicon-mysql-plain"></i>
                <i className="devicon-laravel-plain"></i>
                <i className="devicon-wordpress-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-less-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-linux-plain"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-photoshop-plain"></i>
                <i className="devicon-illustrator-line"></i>
                <i className="devicon-apache-line-wordmark"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-slack-plain"></i>
                <i className="devicon-symfony-original"></i>
                <i className="devicon-visualstudio-plain"></i>
            </div>
  
        </div>
      </>
    );
  }

}