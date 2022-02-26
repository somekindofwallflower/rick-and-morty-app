import React, {useEffect} from 'react'
import "./Characters.scss";
import { List } from 'antd';
import { useCharacters } from "src/modules/Characters/provider/characters.provider"
import {CharacterCard} from "src/components/characterCard/CharacterCard"
import { useNavigate } from "react-router-dom";

const Characters = () => {
    const { characters, paginationInfo, getCharacters, onChangeQuery, query, pendingData } = useCharacters();
    let navigate = useNavigate();
    // Get characters data
    useEffect( () => {
        getCharacters();
    }, [query, getCharacters])


    const changePagination = (page: number) => {
        onChangeQuery({
            ...query,
            page: page
        });
    }

    const goToDetails = (id: number) => navigate(`/characters/${id}`, {replace: true});

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
                            <CharacterCard data={item} isLoading={pendingData} goToDetails={goToDetails}></CharacterCard>
                        </List.Item>
                )}
            />,
        </div>
    )
}

export default Characters
