import React, { Component } from 'react';
import './App.css';
import Card from "./Card.js";
import NavCard from "./NavCard";
import About from "./About.js";
import Contact from "./Contact.js";
import ShowArtist from "./ShowArtist.js";
import {Route, Link} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [] 
     }
   }
  componentDidMount(){
    const urlBase = "http://peaceful-badlands-98440.herokuapp.com"
    const optionsLogin = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({email: "juliam@gmail.com", password: "020390"})  
      };
      const optionsArtists = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"  
      };
      //login e no callback do login, pegar artistas
      fetch(`${urlBase}/login`, optionsLogin).then(res =>  res.json()).then(res => {
        fetch(`${urlBase}/artists`, optionsArtists).then(res => res.json())
          .then(data => this.setState({ artists: data }))
        });
      }
  render() {
    return (
      <div> 
        <nav>
          <NavCard />
        </nav>
        <Route path="/about" component={About} />        
        <Route path="/contact" component={Contact} />
        <Route path="/artists" render={() => 
          <div>
            {this.state.artists.map(artist => 
            <ShowArtist key={artist.id} name={artist.name} genre={artist.genre} id={artist.id} />
           )}
          </div>
        } 
        />
      </div>
    );
  }
}
export default App;

  