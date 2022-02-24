import React, { useState, createContext, useCallback, useContext} from 'react';
import {Characters} from "src/services/HomeService";
import {CharacterType} from "src/models/character.interface"

interface IHomeContext {
    characters: CharacterType[]
    getCharacters: Function
}

const defaultState = {
    characters: [],
    getCharacters: () => [],
};

export const HomeContext = createContext<IHomeContext>(defaultState);

const useProvideHome = () => {

    const [characters, setCharacters] = useState<CharacterType[]>([])

    const getCharacters = useCallback(async () => {
        try {
            const data = await Characters.getCharacters();
            setCharacters(data.results);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }, []);

    return {
       characters,
       getCharacters
    };

}


export const HomeProvider = ({ children } : any) => {
    const home = useProvideHome();
    return (
        <HomeContext.Provider value={home}>
            {children}
        </HomeContext.Provider>
    );
};


export const useHome = () => useContext(HomeContext);