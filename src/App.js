import React from 'react';
import ReactDOM from 'react-dom';



import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route,Switch} from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return <>
  <Navbar/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/hotels/" component={Rooms}/>
  <Route exact path="/hotels/:slug" component={SingleRooms}/>

  <Route component={Error}/>
  </Switch>
  

  </>
}

export default App;
