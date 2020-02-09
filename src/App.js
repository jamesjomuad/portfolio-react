import React from 'react';
import { Switch, Route } from 'react-router-dom';
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


function App() {
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
    </div>
  );
}

export default App;
