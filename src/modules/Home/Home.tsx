import React, {useEffect} from 'react'
import "./Home.scss";
import { List, Badge, Card } from 'antd';
import { useHome } from "src/modules/Home/provider/home.provider"
import {CharacterCard} from "src/components/characterCard/CharacterCard"

const Home = () => {
    const { characters, paginationInfo, getCharacters, onChangeQuery, query } = useHome();

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
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
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

export default Home
