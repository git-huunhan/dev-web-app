import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import TopMenu from './components/TopMenu'; 
import Home from './pages/Home';
import Domain from './pages/Domain'; 
import Git from './pages/Git'; 
import Docker from './pages/Docker';
import PHP from './pages/PHP';
import Profile from './pages/Profile'; 
import DBMS1 from './pages/DBMS1'
import DBMS2 from './pages/DBMS2'
import HomeWebDev from './pages/HomeWebDev';
import HomeDBMS from './pages/HomeDBMS';
import Note from './pages/Note'

import lab01 from './sub-pages/lab-domain/lab01';
import lab02 from './sub-pages/lab-domain/lab02';
import lab03 from './sub-pages/lab-domain/lab03';
import lab04 from './sub-pages/lab-domain/lab04';
import lab05 from './sub-pages/lab-domain/lab05';
import lab06 from './sub-pages/lab-domain/lab06';
import lab07 from './sub-pages/lab-domain/lab07';
import lab08 from './sub-pages/lab-domain/lab08';
import lab09 from './sub-pages/lab-domain/lab09';

import LabDBMS01 from './sub-pages/lab-dbms/lab01'
import LabDBMS02 from './sub-pages/lab-dbms/lab02'
import LabDBMS03 from './sub-pages/lab-dbms/lab03'
import LabDBMS04 from './sub-pages/lab-dbms/lab04'
import LabDBMS05 from './sub-pages/lab-dbms/lab05'
import LabDBMS06 from './sub-pages/lab-dbms/lab06'
import LabDBMS07 from './sub-pages/lab-dbms/lab07'
import LabDBMS08 from './sub-pages/lab-dbms/lab08'
import LabDBMS09 from './sub-pages/lab-dbms/lab09'
import LabDBMS10 from './sub-pages/lab-dbms/lab10'

function App() {
  return (
     <Router>
      <div className="App">
        <TopMenu/>

        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/domain" exact component={Domain}/>
        <Route path="/git" exact component={Git}/>
        <Route path="/docker" exact component={Docker}/>
        <Route path="/php" exact component={PHP}/>
        <Route path="/dbms1" exact component={DBMS1}/>
        <Route path="/dbms2" exact component={DBMS2}/>
        <Route path="/webdev" exact component={HomeWebDev}/>
        <Route path="/dbms" exact component={HomeDBMS}/>
        <Route path="/note" exact component={Note}/>


        <Route path="/lab-domain-01" exact component={lab01}/>
        <Route path="/lab-domain-02" exact component={lab02}/>
        <Route path="/lab-domain-03" exact component={lab03}/>
        <Route path="/lab-domain-04" exact component={lab04}/>
        <Route path="/lab-domain-05" exact component={lab05}/>
        <Route path="/lab-domain-06" exact component={lab06}/>
        <Route path="/lab-domain-07" exact component={lab07}/>
        <Route path="/lab-domain-08" exact component={lab08}/>
        <Route path="/lab-domain-09" exact component={lab09}/>

        <Route path="/lab-dbms-01" exact component={LabDBMS01}/>
        <Route path="/lab-dbms-02" exact component={LabDBMS02}/>
        <Route path="/lab-dbms-03" exact component={LabDBMS03}/>
        <Route path="/lab-dbms-04" exact component={LabDBMS04}/>
        <Route path="/lab-dbms-05" exact component={LabDBMS05}/>
        <Route path="/lab-dbms-06" exact component={LabDBMS06}/>
        <Route path="/lab-dbms-07" exact component={LabDBMS07}/>
        <Route path="/lab-dbms-08" exact component={LabDBMS08}/>
        <Route path="/lab-dbms-09" exact component={LabDBMS09}/>
        <Route path="/lab-dbms-10" exact component={LabDBMS10}/>
      </div>
    </Router>
  );
}

export default App;
