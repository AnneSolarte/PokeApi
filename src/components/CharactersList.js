import React, { useEffect, useState } from 'react';

import { getCharacter } from '../services/pokeApi';
import { getEvolutions } from '../services/evolutions';

const poke1 = "bulbasaur"
const poke2 = "charmander"
const poke3 = "squirtle"

export const CharacterList = () => {
  const [bulbasaur, setBulbasaur] = useState([]);
  const [charmander, setCharmander] = useState([]);
  const [squirtle, setSquirtle] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    (async() => {
      const bulbasaur = JSON.parse(localStorage.getItem("bulbasaur"));
      const charmander = JSON.parse(localStorage.getItem("charmander"));
      const squirtle = JSON.parse(localStorage.getItem("squirtle"));
        if (bulbasaur && charmander && squirtle) {
            setBulbasaur(bulbasaur);
            setCharmander(charmander);
            setSquirtle(squirtle)
            setLoading(false)
        } else {
            console.log(loading);

            const data = async function getData() {
              try {
                let data = await Promise.all([() => getCharacter(poke1), getCharacter(poke2), getCharacter(poke3)]);
                console.log(data);
                return data
              } catch (error) {
                console.log('error: ' + error);
              }
            };

            setBulbasaur(data[0]);
            setCharmander(data[1]);
            setSquirtle(data[2]);
            setLoading(false);
            console.log(loading)
        }
    })()
    
    
  }, []);


  const showEvolutions = async(id) => {
    await getEvolutions(id);

  }

  if (loading === true) {
    return <div>Loading...</div>;
  } else {
    return (

      <div className='box'>
        <h2>Characters</h2>
  
  
        <div className='content'>
            <div className='card'>
                <h2>{ bulbasaur.name} </h2>
                <img src={bulbasaur.sprites.front_default} alt="bulbasaur img" onClick={() => showEvolutions(bulbasaur.id)}/>
  
            </div>
  
            <div className='card' >
                <h2>{ charmander.name} </h2>
                <img src={charmander.sprites.front_default} alt="bulbasaur img" onClick={() => showEvolutions(charmander.id)}/>
  
            </div>
  
            <div className='card'>
                <h2>{ squirtle.name} </h2>
                <img src={squirtle.sprites.front_default} alt="bulbasaur img" onClick={() => showEvolutions(squirtle.id)}/>
  
            </div>
        </div>  
      </div>
    );
  }

  
};