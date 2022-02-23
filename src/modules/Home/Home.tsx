import React, {useEffect} from 'react'
import "./Home.css";
import { useHome } from "src/modules/Home/provider/home.provider"
import {CharacterType} from "src/models/character.interface"

const Home = () => {
    const { characters, getCharacters } = useHome();

    // Get characters data
    useEffect( () => {
           getCharacters();
    }, [])


    return (
        <div>
            {characters.map((character:CharacterType) => (
                <div key={character.id}>{character.name}</div>
            ))}
        </div>
    )
}

export default Home
