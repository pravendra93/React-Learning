import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" > <Home/> </Route>
          <Route path="/about"><About/></Route>
          <Route path="/contact" component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
