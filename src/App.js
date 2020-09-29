import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import TopMenu from './components/TopMenu'; 
import Domain from './pages/Domain'; 
import Git from './pages/Git'; 
import Docker from './pages/Docker';
import PHP from './pages/PHP';
import Index from './pages/Index'; 

import LabDomain from './sub-pages/LabDomain'

function App() {
  return (
     <Router>
      <div className="App">
        <TopMenu/>

        <Route path="/" exact component={Index} />
        <Route path="/domain" exact component={Domain}/>
        <Route path="/git" exact component={Git}/>
        <Route path="/docker" exact component={Docker}/>
        <Route path="/php" exact component={PHP}/>

        <Route path="/lab-domain" exact component={LabDomain}/>
      </div>
    </Router>
  );
}

export default App;
