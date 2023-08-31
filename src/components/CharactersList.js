import React, { useEffect, useState } from 'react';

import { getCharacter } from '../services/pokeApi';
import { getEvolutions } from '../services/evolutions';

const pok1 = 1
const pok2 = 4
const pok3 = 7

const poke1 = "bulbasaur"
const poke2 = "charmander"
const poke3 = "squirtle"

export const CharacterList = () => {
  const [bulbasaur, setBulbasaur] = useState([]);
  const [charmander, setCharmander] = useState([]);
  const [squirtle, setSquirtle] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const getCharacters = async() => {
      const b = await getCharacter(poke1);
      const c = await getCharacter(poke2);
      const s = await getCharacter(poke3);

      setBulbasaur(b);
      setCharmander(c);
      setSquirtle(s); 
      setLoading(false);
    }
    getCharacters();
     
  }, []);


  const evolvePokemon = async(id, oldId, setName) => {
    console.log("evolve")
    const newId = id + 1
    const maxId = oldId + 2
    console.log("maxid", maxId)
    if(newId <= maxId){
      const poke = await getEvolutions(newId)
      console.log(newId)
      setName(poke)
    } else {

    }
  }

  const devolvePokemon = async(id, oldId, setName) => {
    console.log("devolve")
    const newId = id - 1
    const maxId = oldId 
    console.log("maxid",maxId)
    if(newId >= maxId){
      const poke = await getEvolutions(newId)
      console.log(newId)
      setName(poke)
    } else{

    }
  }

  if (loading === true) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='box'>
        <h2>Characters</h2>
  
        <div className='content'>
            <div className='card'>
                <h2>{bulbasaur.name} </h2>

                <div className='divCard'>
                      <button className='buttonDevolve' onClick={() => devolvePokemon(bulbasaur.id, pok1, setBulbasaur)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                      <img src={bulbasaur.sprites.front_default} alt="bulbasaur img"/>
                      <button className='buttonEvolve' onClick={() => evolvePokemon(bulbasaur.id, pok1, setBulbasaur)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                </div>

                <p>Id: {bulbasaur.id} </p>
                <p>Base experience: {bulbasaur.base_experience}</p>
                <p>Height: {bulbasaur.height} </p>
                <p>Weight: {bulbasaur.weight}</p>
            </div>
  
            <div className='card' >
                <h2>{  (charmander.name)[0].toUpperCase() + (charmander.name).substring(1)} </h2>

                <div className='divCard'>
                      <button className='buttonDevolve' onClick={() => devolvePokemon(charmander.id, pok2, setCharmander)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                      <img src={charmander.sprites.front_default} alt="bulbasaur img"/>
                      <button className='buttonEvolve' onClick={() => evolvePokemon(charmander.id, pok2, setCharmander)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                </div>
                
                <p>Id: {charmander.id} </p>
                <p>Base experience: {charmander.base_experience}</p>
                <p>Height: {charmander.height} </p>
                <p>Weight: {charmander.weight}</p>
            </div>
  
            <div className='card'>
                <h2>{(squirtle.name)[0].toUpperCase() + (squirtle.name).substring(1)} </h2>

                <div className='divCard'>
                      <button className='buttonDevolve' onClick={() => devolvePokemon(squirtle.id, pok3, setSquirtle)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                      <img src={squirtle.sprites.front_default} alt="bulbasaur img"/>
                      <button className='buttonEvolve' onClick={() => evolvePokemon(squirtle.id, pok3, setSquirtle)}><img src='https://icon-library.com/images/white-back-icon/white-back-icon-7.jpg'/></button>
                </div>
                
                <p>Id: {squirtle.id} </p>
                <p>Base experience: {squirtle.base_experience}</p>
                <p>Height: {squirtle.height} </p>
                <p>Weight: {squirtle.weight}</p>
  
            </div>
        </div>  
      </div>
    );
  }

  
};