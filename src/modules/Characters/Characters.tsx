import React, {useEffect} from 'react'
import "./Characters.scss";
import { List, Badge, Card } from 'antd';
import { useCharacters } from "src/modules/Characters/provider/characters.provider"
import {CharacterCard} from "src/components/characterCard/CharacterCard"

const Characters = () => {
    const { characters, paginationInfo, getCharacters, onChangeQuery, query } = useCharacters();

    // Get characters data
    useEffect( () => {
        getCharacters();
    }, [query])


    const changePagination = (page: number) => {
        onChangeQuery({
            ...query,
            page: page
        });
    }

    return (
        <div>
            <List
                grid={{
                    gutter: 32,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 5,
                    xl: 5,
                    xxl: 6,
                }}
                pagination={{
                    current: query.page,
                    onChange: changePagination,
                    pageSize: 20,
                    total: paginationInfo.count,
                    position: "bottom"
                }}
                dataSource={characters}
                renderItem={item => (
                        <List.Item>
                            <CharacterCard data={item} isLoading={false}></CharacterCard>
                        </List.Item>
                )}
            />,
        </div>
    )
}

export default Characters
