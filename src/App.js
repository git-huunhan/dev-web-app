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

import lab01 from './sub-pages/lab-domain/lab01';
import lab02 from './sub-pages/lab-domain/lab02';
import lab03 from './sub-pages/lab-domain/lab03';

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

        <Route path="/lab-domain-01" exact component={lab01}/>
        <Route path="/lab-domain-02" exact component={lab02}/>
        <Route path="/lab-domain-03" exact component={lab03}/>

      </div>
    </Router>
  );
}

export default App;
