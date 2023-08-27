import React, { useState} from "react";
import { Component } from "react";
import { render } from "react-dom";

class Navbar extends Component  {
state={ clicked: false };
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
render () 
   { return (  
      <>
        <header className="head" id="home">
        <div className="nav">
          <section className="logo"> Adioo-10 </section>
         
          <div class="hamburger" onClick={this.handleClick}>
       <i id="bars" 
       className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
       </i>
      </div>

          <ul id="nav-list"  className={this.state.clicked ? 
            "#nav-list active" : "#nav-list"}>
            <li className="nav-item">
              <a href="page.html" className="nav-link current">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#Services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      </>
        
    )};
}

export default Navbar;  