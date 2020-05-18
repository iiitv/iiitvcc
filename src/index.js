import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }
  render() {
    return (
      <div className="container text-black" style={{ maxWidth: "55rem" }}>
        <h1 className="mt-4 mb-4 wt">Create Post and add comment</h1>
        <Header />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
