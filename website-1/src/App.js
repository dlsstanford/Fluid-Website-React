import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Assets/css/default.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Pages/HomePage";
import Products from "./components/Pages/Products";
import Contact from "./components/Pages/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Contact" component={Contact} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
