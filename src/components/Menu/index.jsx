import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavMenu = props => {
  return (
    <Menu>
      <Menu.Item header>Zach Nusbaum</Menu.Item>
      <Menu.Item>Posts</Menu.Item>
      <Menu.Item>About Me</Menu.Item>
      <Menu.Item>Projects</Menu.Item>
    </Menu>
  );
};

export default NavMenu;
