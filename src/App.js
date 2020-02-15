import React from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Aside from './components/aside';
import Home from './pages/home';
import Skills from './pages/skills';
import Awards from './pages/awards';
import Projects from './pages/projects';
import Project from './pages/project';
import Experience from './pages/experience';
import Contact from './pages/contact';


export default class App extends React.Component{
  componentDidMount(){
    let $menu = $('aside #sidebar')

    if(window.matchMedia('(max-width: 768px)').matches){
      $menu.addClass('fadeOutUp');

      $('#toggleMenu, aside #nav .btn-group-vertical .btn').on('click',function(){
        $menu.toggleClass('fadeOutUp fadeInDown')
      });

      $('#goUp').on('click',function(){
        window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
      });
    }
    
  }

  render(){
    return (
      <div key="container" className="container-fluid">
        <div className="row">
          <aside className="col-md-3">
            <Aside/>
          </aside>
          <main className="col-md-9">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/skills' component={Skills}/>
              <Route exact path='/awards' component={Awards}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/project/:id' component={Project} />
              <Route exact path='/experience' component={Experience}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>  
          </main>
        </div>
        <div id="mobile-menu">
          <button id="goUp" className="btn btn-primary"><i className="fas fa-chevron-up"></i></button>
          <button id="toggleMenu" className="btn btn-primary"><i className="fas fa-bars"></i></button>
        </div>
      </div>
    );
  }
}
