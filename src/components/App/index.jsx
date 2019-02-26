import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu';
import PostsContainer from '../../containers/Posts';
import AboutContainer from '../../containers/About';
import ProjectsContainer from '../../containers/Projects';

const Placeholder = () => <div>Placeholder</div>;

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <Menu />
            <Route path="/" exact component={Placeholder} />
            <Route path="/posts" component={PostsContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/projects" component={ProjectsContainer} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
