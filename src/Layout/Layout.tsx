import * as React from 'react'
import "./Layout.scss";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import Characters from "src/modules/Characters/Characters"
import Character from "src/modules/Character/Character"
import {Layout, Typography} from 'antd';
import { CharactersProvider } from "src/modules/Characters/provider/characters.provider";
import { CharacterProvider } from "src/modules/Character/provider/character.provider";

const { Title, Text } = Typography;
const {Header, Content, Footer} = Layout;

const DefaultLayout = () => {
    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header className="header">
                        <Title className="title" level={3}>Rick and Morty</Title>
                </Header>
                <Content className="content-wrapper">
                    <div className="content">
                        <Routes>
                            {/*Characters*/}
                            <Route path="/characters" element={<CharactersProvider><Characters/></CharactersProvider>}/>
                            {/*Character*/}
                            <Route path="/characters/:id" element={<CharacterProvider><Character/></CharacterProvider>}/>
                            {/*No match route*/}
                            <Route
                                path="*"
                                element={<Navigate to="/characters"/>}
                            />
                        </Routes>
                    </div>
                </Content>
                <Footer className="footer">
                    Rick and Morty ©2022 Created by somekindofwallflower
                </Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default DefaultLayout
