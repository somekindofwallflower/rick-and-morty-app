import * as React from 'react'
import "./Layout.scss";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "src/modules/Home/Home"
import {Layout, Typography} from 'antd';
import { HomeProvider } from "src/modules/Home/provider/home.provider";

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
                            <Route path="/home" element={<HomeProvider><Home/></HomeProvider>}/>
                            {/*No match route*/}
                            <Route
                                path="*"
                                element={<Navigate to="/home"/>}
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
