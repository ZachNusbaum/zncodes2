import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavMenu = props => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/" header>
        Zach Nusbaum
      </Menu.Item>
      <Menu.Item as={Link} to="/posts">
        Posts
      </Menu.Item>
      <Menu.Item as={Link} to="/about">
        About Me
      </Menu.Item>
      <Menu.Item as={Link} to="/projects">
        Projects
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
