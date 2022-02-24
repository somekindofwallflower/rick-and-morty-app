import React, {useEffect} from 'react'
import "./Home.css";
import { Row, Col } from "antd";
import { useHome } from "src/modules/Home/provider/home.provider"
import {CharacterType} from "src/models/character.interface"
import {CharacterCard} from "src/components/characterCard/CharacterCard"
const Home = () => {
    const { characters, getCharacters } = useHome();

    // Get characters data
    useEffect( () => {
           getCharacters();
    }, [])


    return (
        <div>
            <Row gutter={[16, 16]} className="pb-8">
                {characters.map((character:CharacterType) => (
                    <Col span={4} key={character.id} >
                    <CharacterCard data={character} isLoading={false}></CharacterCard>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
