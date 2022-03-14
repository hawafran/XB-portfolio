import React from "react";
import 'materialize-css';
import { Navbar, NavItem, Icon, } from 'react-materialize';
import '../App.css'


const NavBar = () => {

  return (
<div class="navbar">
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
      <NavItem href="/work">
        Work
    </NavItem>
      <NavItem href="/style">
        Style
    </NavItem>
      <NavItem href="/aboutme">
        About Me
    </NavItem>
    <NavItem href="/contact">
        Contact Me
    </NavItem>
      
      
    </Navbar>
    </div>
  );
}

export default NavBar;