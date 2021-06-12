import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './components/Header'

import MainPage from './screen/MainPage'
import './App.css';
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen/homeScreen";

function App() {
  return (
        <Router>
          <Header/>
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/" component={MainPage} />
          </Switch>
          <Footer/>
        </Router>
  );
}

export default App;
