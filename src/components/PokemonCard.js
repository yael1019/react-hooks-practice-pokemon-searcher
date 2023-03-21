import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
// SETTING STATE FOR POKEMON CARD CLICKING
  const [showBack, setShowBack] = useState(false)
  return (
    <Card onClick={ () => setShowBack(!showBack) } >
      <div>
        <div className="image">
          <img src={ showBack ? pokemon.sprites.back : pokemon.sprites.front } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{ pokemon.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { pokemon.hp }
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
