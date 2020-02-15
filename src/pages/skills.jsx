import React from 'react';
import './skills.css';
import axios from 'axios';
import ProgressCard from '../components/progressCard';
import Loader from '../components/loader';
import Parser from 'html-react-parser';


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
                this.getCategories().map((value, index) => (
                    <>
                        <h2 key={'h2'+index}>{value}</h2>
                        {
                            this.getByCategory(value).map((obj, key) => {
                                return <ProgressCard key={key} title={obj.title} score={obj.score}/>
                            })
                        }
                        <div key={'space'+index} className="spacing-3"></div>
                    </>
                ))
            }

            <h2>Technologies:</h2>
            <div id="logos">
                {
                    this.state.data.technologies.map((tech, i) => {
                        return Parser(tech)
                    })
                }
            </div>
  
        </div>
      </>
    );
  }

}