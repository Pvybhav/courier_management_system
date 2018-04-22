import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, Image, Menu } from 'semantic-ui-react';
import Menubar from './components/menubar.js'
import MyImage from './images/home.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <Image src={MyImage} fluid />
      </div>
    );
  }
}

export default App;
