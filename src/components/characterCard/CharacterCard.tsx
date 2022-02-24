import React from 'react'
import { Card, Skeleton } from 'antd';
import {CharacterType} from "src/models/character.interface"

interface Props {
    data: CharacterType,
    isLoading: boolean,
}


export const CharacterCard = ({ data, isLoading = false }: Props) => {
    return (
        <>
            {!isLoading ? <Card className='min-h-full'
                                style={{ width: '100%' }}
                                hoverable
                                cover={<img alt={data.name} src={data.image} />}>

                </Card> :
                <Card>
                    <Skeleton.Image />
                    <Skeleton />
                </Card>
            }
        </>


    )
}
