import React, { useState, createContext, useCallback, useContext} from 'react';
import {Characters} from "src/services/CharactersService";
import {CharacterType} from "src/models/character.interface"
import { useParams } from "react-router-dom";

interface ICharacterContext {
    character: CharacterType|any
    characterEpisodes: any
    characterLocation: any
    getCharacter: Function,
    pendingData: boolean
}

const defaultState = {
    character: {},
    characterEpisodes: [],
    characterLocation: {},
    getCharacter: () => {},
    pendingData: false
};

export const CharacterContext = createContext<ICharacterContext>(defaultState);

const useProvideCharacter = () => {
    const [pendingData, setPendingData] = useState<boolean>(false);
    const [character, setCharacter] = useState<CharacterType|any>({})
    const [characterLocation, setCharacterLocation] = useState<any>({})
    const [characterEpisodes, setCharacterEpisodes] = useState<any>([])
    const params = useParams();
    /**
     * @description Get Characters data
     */
    const getCharacter = useCallback(async () => {

        try {
            setPendingData(true);
            const character:any = await Characters.getCharacter(params.id);
            setCharacter(character);
            const characterLocation = await Characters.getCharacterLocation(getIds([character.location?.url]))
            setCharacterLocation(characterLocation);
            const characterEpisodes = await Characters.getCharacterEpisodes(getIds(character.episode));
            setCharacterEpisodes(Array.isArray(characterEpisodes) ? characterEpisodes : [characterEpisodes]);
            return Promise.resolve();
        } catch (e) {
            //TODO Display an popup error message in case of error
            return Promise.reject(e);
        } finally {
            setPendingData(false);
        }
    }, [params.id]);

    const getIds = (urls: any) => {
        let ids: Array<number> = [];
        urls?.forEach((episode: any)=> ids.push(parseInt(episode.match(/\d+/g)[0])));
        return ids;
    }
    return {
        character,
        characterLocation,
        characterEpisodes,
        getCharacter,
        pendingData
    };

}


export const CharacterProvider = ({ children } : any) => {
    const character = useProvideCharacter();
    return (
        <CharacterContext.Provider value={character}>
            {children}
        </CharacterContext.Provider>
    );
};


export const useCharacter = () => useContext(CharacterContext);
