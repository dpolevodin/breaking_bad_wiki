import React, { useState } from 'react';
// import CharacterCard from '../src/components/CharacterCard';
import CharacterCard from './CharacterCard'


function getCharactersData() {
    const url = 'https://www.breakingbadapi.com/api/characters'
    const characterData = []

    fetch(url)
        .then(response => response.json())
        .then(data => characterData.push(...data))
    
    return characterData
}

function CharactersList(props) {
    const [characters, getCharacters] = useState(getCharactersData())

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