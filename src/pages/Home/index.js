import React from 'react';

import ImagePokemon from '../../assets/images/image-pokemon.png';
import IconQuestion from '../../assets/images/icon-question.png';

import './style.scss';

function Home() {
  return (
    <main className="main-home">
      <h1>Quem é esse</h1>
      <img src={ImagePokemon} alt='Pokémon'/>
      <img src={IconQuestion} alt='Ponto de Interrogação'/>
      <button>Começar</button>
    </main>
  );
}

export default Home;
