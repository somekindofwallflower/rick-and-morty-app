import React, { useState, createContext, useCallback, useContext} from 'react';
import {Characters} from "src/services/HomeService";
import {CharacterType} from "src/models/character.interface"
import {PaginationType} from "src/models/pagination.interface";
import {QueryType} from "src/models/query.interface";
import { HomeMapper } from "src/domain/home/Home.mapper"
import { HomeQuery } from "src/domain/home/HomeQuery";

import {useFilters} from "src/hooks/useFilters"
interface IHomeContext {
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

export const HomeContext = createContext<IHomeContext>(defaultState);

const useProvideHome = () => {
    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [paginationInfo, setPaginationInfo] = useState<PaginationType>(defaultState.paginationInfo)
    const {query, onChangeQuery} = useFilters({mapper: HomeMapper})
    /**
     * @description Get Characters data
     */
    const getCharacters = useCallback(async () => {
        try {
            console.log("queryyyyyyyyyy", query)
            const data = await Characters.getCharacters(HomeMapper.fromQueryToPayload(query));
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


export const HomeProvider = ({ children } : any) => {
    const home = useProvideHome();
    return (
        <HomeContext.Provider value={home}>
            {children}
        </HomeContext.Provider>
    );
};


export const useHome = () => useContext(HomeContext);
