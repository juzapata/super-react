import React from 'react';
import Card from "./Card.js";


class ShowArtist extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {tracks: []}
    
    this.getArtistsTracks = this.getArtistsTracks.bind(this);
  }
  
  getArtistsTracks(event){
    alert("Está em construção"); 
  }
  
  
  render (){
    return (
      <div>
        <Card>
          <h2>{this.props.name}</h2>
          <h3>{this.props.genre}</h3>
          <button data-id={this.props.id} onClick={this.getArtistsTracks}>Ver musicas</button>
          {this.state.tracks.map(data => 
            <li>{this.tile}</li>
          )}
        </Card>
        
      </div>
      );
  }
}
 
export default ShowArtist;
