import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={Home} />
      </Switch>
    );
  }
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
