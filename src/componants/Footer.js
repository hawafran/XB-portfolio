import React from "react";
import 'materialize-css';
// import { Footer, NavItem, Icon, } from 'react-materialize';
import '../App.css'

const footer = () => {
  

  return (
<div class="footer-fixed">
<footer
  
//   links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
//   moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
>
  <h5 className="white-text">
    Contact Me
  </h5> 
  <a href="https://www.instagram.com/xavierbanks__/" target="_blank" class="white-text" >instagram</a>.
  <a href="mailto:bookingxbanks@gmail.com" target="_blank" class= "white-text">email</a>
 
  {/* <p className="grey-text text-lighten-4">
    You can use rows and columns here to organize your footer content.
  </p> */}
</footer>
    </div>
  );
}

export default footer;