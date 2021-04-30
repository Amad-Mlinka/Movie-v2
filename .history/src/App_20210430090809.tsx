import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { DetailPage } from './pages/DetailPage';
import React from 'react';
import { Header } from './components/header/Header';


function App() {
  return (
    <Router>


 
        <div className="app">
          <Header></Header>

          <Route path="/" exact component={MainPage}></Route>
          <Route path="/:media/:id" exact component={DetailPage}></Route>
        </div>


    </Router>


  );
}

export default App;
