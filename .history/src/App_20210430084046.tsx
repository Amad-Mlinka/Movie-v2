import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { DetailPage } from './pages/DetailPage';
import React from 'react';
import { Header } from './components/header/Header';


function App() {
  return (

    <div className="app">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/:media/:id" exact component={DetailPage}></Route>
        </Switch>
      </Router>
    </div>


  );
}

export default App;
