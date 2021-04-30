import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {MainPage} from "./pages/MainPage"
import {MovieDetailPage} from "./pages/MovieDetailPage"
import { TvDetailPage } from './pages/TvDetailPage';
import { DetailPage } from './pages/DetailPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/:media/:id" exact component={DetailPage}></Route>
        </Switch>


      </div>
    </Router>

  );
}

export default App;
