import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './components/Header'

import MainPage from './screen/MainPage'
import './App.css';

function App() {
  return (
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
  );
}

export default App;
