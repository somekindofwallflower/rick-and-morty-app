import React, {useEffect} from 'react'
import "./Home.css";
import { Row, Col } from "antd";
import { useHome } from "src/modules/Home/provider/home.provider"
import {CharacterType} from "src/models/character.interface"
import {CharacterCard} from "src/components/characterCard/CharacterCard"
import {BasicPagination} from "src/components/pagination/Pagination"
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
            <Row>
                <BasicPagination currentPage={query.page} total={paginationInfo.count} onChange={changePagination}></BasicPagination>
            </Row>
            <Row gutter={[32, 32]}>
                {characters.length ? characters.map((character:CharacterType) => (
                    <Col xs={24} sm={8} md={6} lg={2} key={character.id} >
                    <CharacterCard data={character} isLoading={false}></CharacterCard>
                    </Col>
                )): "There are no results"}
            </Row>
        </div>
    )
}

export default Home
