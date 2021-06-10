import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './components/Header'

import MainPage from './screen/MainPage'
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
          <Footer/>
        </Router>
  );
}

export default App;
