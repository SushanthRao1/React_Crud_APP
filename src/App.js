//import react from 'react';
import Classcomp from './componets/Classcomp.jsx';
import Movie from './componets/Funcomp.jsx';
import AGGRID from './componets/AG-Grid.jsx';
import UseStateHK from './componets/useStateHK.jsx';
import APIDemo from './componets/ApiDemo.jsx';
import Calculator from './componets/Statecomp.jsx';
import EveneChange from './componets/InputEvent.jsx';
//import { Classcomp, Movie, AGGRID, UseStateHK, APIDemo, Calculator, EveneChange } from './componets'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Button, Alert, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Linksfun() {
  return (<div>
    <Link to="/">HOME</Link> <br />
    <Link to="/Calculator">Calculator</Link> <br />
    <Link to="/Classcomp">Classcomp</Link> <br />
    <Link to="/Eventchange">EventHandler</Link><br />
    <Link to="/AGGRID">AGGRID</Link><br />
    <Link to="/APIDemo">APIDEMO</Link><br />
    <Link to="/Movie">FunctionalComp</Link><br />
    <Link to="/UseStateHK">UseStateHooK</Link><br /></div>)
}

function Routerfun() {
  return (<div>
    <Route path="/Calculator"><Calculator /></Route>
    <Route path="/Classcomp"><Classcomp /></Route>
    <Route path="/Eventchange"><EveneChange /></Route>
    <Route path="/AGGRID"><AGGRID /></Route>
    <Route path="/APIDemo"><APIDemo /></Route>
    <Route path="/Movie"><Movie /></Route>
    <Route path="/UseStateHK"><UseStateHK /></Route>
  </div>)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Linksfun />
        <Routerfun />
      </Router >

    </div >
  );
}

export default App;
/* Bootstrap content
         <button class="btn btn-info">Bootstrap</button>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
  </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>*/


