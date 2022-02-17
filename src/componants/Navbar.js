import React from "react";
import 'materialize-css';
import { Navbar, NavItem, Icon, } from 'react-materialize';
import '../App.css'


const NavBar = () => {

  return (
<div class="navbar-fixed">
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo center" href="#"><h4>Xavier Banks</h4></a>}
      id="mobile-nav"
      className="black"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem onClick={function noRefCheck() { }}>
      </NavItem>
      <NavItem href="/">
        Work
    </NavItem>
      <NavItem href="/style">
        Style
    </NavItem>
      <NavItem href="/aboutme">
        About Me
    </NavItem>
      
      
    </Navbar>
    </div>
  );
}

export default NavBar;