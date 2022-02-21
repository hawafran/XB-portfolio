import React from "react";
import 'materialize-css';
import {Button} from 'react-materialize';
import Background from '../images/home.jpg';
import '../gallery.css';
import { fontWeight } from "@mui/system";


function Home() {
  return (  
    <div className = "welcome-text">
    <div className = "welcome-image">
      <img src = {Background}style={{width: '80%'}} alt = "welcome-page" />
    </div>
      <div class='text-on-image'>
         <h2 classNme='greeting-text' style = {{fontWeight: "bold"}}> The Banks Experience </h2>
         <Button
  href="/work" target="_blank"
  node="a"
  waves="light"
  className="bio-button grey darken-4 valign-center"
>
  Enter...
</Button>
      </div>
  </div>
   );
}


export default Home;