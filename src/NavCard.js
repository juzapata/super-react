import React from 'react';
import "./NavCard.css";
import {Route, Link} from "react-router-dom";

function NavCard (){
    return (
      <div className="nav-card">
        
          <h2>
          <Link to="/">Home</Link>
          </h2>
          <h2>
            <Link to="/about">Sobre nós</Link>
          </h2>
          <h2>
          <Link to="/contact">Contato</Link>
          </h2>
          <h2>
          <Link to="/artists">Artistas</Link>
          </h2>
         
      </div>
    );
}
export default NavCard;