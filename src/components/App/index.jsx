import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu';

const Placeholder = () => <div>Placeholder</div>;

class App extends Component {
  render() {
    return (
      <Container>
        <Menu />
        <Router>
          <div>
            <Route path="/" exact component={Placeholder} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
