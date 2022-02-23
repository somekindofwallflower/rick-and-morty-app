import * as React from 'react'
import "./Layout.css";
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"
import Home from "src/modules/Home/Home"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

const Layout = () => {
    return (
        <BrowserRouter>
            {/*TODO Create app layout*/}
            {/*Header*/}
            <Header/>
            {/*Body*/}
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    {/*No match route*/}
                    <Route
                        path="*"
                        element={<Navigate to="/home" />}
                    />
                </Routes>
            </main>
            {/*Footer*/}
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout
