import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu />
      </Container>
    );
  }
}

export default App;
