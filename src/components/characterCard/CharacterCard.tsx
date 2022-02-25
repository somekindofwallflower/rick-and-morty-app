import React from 'react'
import {Card, Skeleton, Badge, Typography} from 'antd';
import {CharacterType} from "src/models/character.interface"
import "./CharacterCard.scss"

const {Title} = Typography;

interface Props {
    data: CharacterType,
    isLoading: boolean,
    goToDetails: Function
}


export const CharacterCard = ({data, isLoading = false, goToDetails}: Props) => {
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

    return (
        <>
            {!isLoading ?
                <div onClick={() => goToDetails(data.id)}>
                    <Card className='min-h-full'
                          style={{width: '100%'}}
                          hoverable
                          cover={<img alt={data.name} src={data.image}/>}
                    >
                        <Title level={5}>{data.name}</Title>
                        <Badge color={getStatusColor(data.status)} text={data.status}/> - {data.species}
                    </Card>
                </div>
                :
                <Card>
                    <Skeleton.Image/>
                    <Skeleton/>
                </Card>
            }
        </>


    )
}
