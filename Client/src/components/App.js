import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import Order from './Order';

class App extends Component {
  render() {
    return <div>
      {/* <LinkList /> */}
      <Order/>
    </div>;
  }
}

export default App;
