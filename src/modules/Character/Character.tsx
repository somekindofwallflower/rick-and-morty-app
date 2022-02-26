import React, {useEffect} from 'react';
import {useCharacter} from "src/modules/Character/provider/character.provider";
import { BackButton } from "src/components/backButton/BackButton";
import {Card, Row, Col, Badge, Typography, Tag, Skeleton} from 'antd';
import "./Character.scss"

const {Title, Text} = Typography;

const Character = () => {
    const { character, getCharacter, characterLocation, characterEpisodes, pendingData} = useCharacter();

    // Get characters data
    useEffect( () => {
        getCharacter();
    }, [])

    const getStatusColor = (status: String) => {
        let statusColor = ""
        switch (status) {
            case "Dead":
                statusColor = "red";
                break;
            case "Alive":
                statusColor = "green";
                break;
            default:
                statusColor = "cyan"
        }
        return statusColor;
    }

    return(
        <div>
            <BackButton title="Go Back"></BackButton>
            <Row  justify="center">
                    <Col xs={24} sm={18} md={16} lg={16} xl={16}>
                        {
                            pendingData ? <Skeleton avatar paragraph={{ rows: 4 }} /> :  <Badge.Ribbon text={character.status} color={getStatusColor(character.status)}>
                                <Card hoverable>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col  xs={24} sm={24} md={24} lg={6} xl={6} className="image-wrapper">
                                            <img src={character.image} alt={character.name} width="100%"/>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                                            <Title level={3}>{character.name} - {character.species}</Title>
                                            <Title level={5}>First seen in: <Text type="secondary">{character.origin?.name}</Text></Title>
                                            <Title level={5}>Last known Location:  <Text type="secondary">{characterLocation.name}</Text></Title>
                                            <Title level={5}>Location Type:  <Text type="secondary">{characterLocation.type}</Text></Title>
                                            <Title level={5}>Dimensions: <Text type="secondary">{characterLocation.dimension}</Text></Title>
                                            <Title level={5}>Residents: <Text type="secondary">{characterLocation.residents?.length - 1}</Text></Title>
                                        </Col>
                                    </Row>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col className="episode-wrapper">
                                            <Title level={5}>Episodes</Title>
                                            {characterEpisodes.map((episode:any) => (
                                                <Tag key={episode.id} color="green">{episode.name}</Tag>
                                            ))}
                                        </Col>
                                    </Row>
                                </Card>
                            </Badge.Ribbon>
                        }
                    </Col>
                </Row>
        </div>
    )

}


export default Character;
