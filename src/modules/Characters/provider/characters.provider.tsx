import React, { useState, createContext, useCallback, useContext} from 'react';
import {Characters} from "src/services/CharactersService";
import {CharacterType} from "src/models/character.interface"
import {PaginationType} from "src/models/pagination.interface";
import {QueryType} from "src/models/query.interface";
import { CharactersMapper } from "src/domain/characters/Characters.mapper"

import {useFilters} from "src/hooks/useFilters"
interface ICharactersContext {
    characters: CharacterType[]
    paginationInfo: PaginationType,
    query: QueryType,
    getCharacters: Function
    onChangeQuery: Function
}

const defaultState = {
        characters: [],
        getCharacters: () => [],
        paginationInfo: {
            count: 0,
            next: null,
            pages: 1,
            prev: null,
        },
    query: {
        page: 1,
        search: null
    },
    onChangeQuery: () => {}
    };

export const CharactersContext = createContext<ICharactersContext>(defaultState);

const useProvideCharacters = () => {
    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [paginationInfo, setPaginationInfo] = useState<PaginationType>(defaultState.paginationInfo)
    const {query, onChangeQuery} = useFilters({mapper: CharactersMapper})
    /**
     * @description Get Characters data
     */
    const getCharacters = useCallback(async () => {
        try {
            console.log("queryyyyyyyyyy", query)
            const data = await Characters.getCharacters(CharactersMapper.fromQueryToPayload(query));
            setCharacters(data.results);
            setPaginationInfo(data.info);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }, [query]);

    return {
       characters,
       paginationInfo,
       query,
       getCharacters,
       onChangeQuery,
    };

}


export const CharactersProvider = ({ children } : any) => {
    const characters = useProvideCharacters();
    return (
        <CharactersContext.Provider value={characters}>
            {children}
        </CharactersContext.Provider>
    );
};


export const useCharacters = () => useContext(CharactersContext);
