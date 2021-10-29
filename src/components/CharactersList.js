import React, { useState } from 'react';
// import CharacterCard from '../src/components/CharacterCard';
import CharacterCard from './CharacterCard'



const url = 'https://www.breakingbadapi.com/api/characters'
const characterData = []

fetch('https://www.breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then(data => characterData.push(...data))

function CharactersList(props) {
    const [characters, getCharacters] = useState(characterData)
    console.log(characterData)
    setTimeout(()=>{}, 2000)
    
    return (
        characters.map((item) => 
            <li className="App__item" key={item.char_id.toString()}>
                <CharacterCard name = {item.name} nickname = {item.nickname} img={item.img} birthday={item.birthday} />
            </li>
    )
    )
}

export default CharactersList