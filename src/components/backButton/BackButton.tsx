import React from 'react';
import { Typography } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const {  Link } = Typography;

interface Props {
    title: String
}

export const BackButton = ({ title } : Props) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/characters")
    }
    return (
        <div>
            <Link onClick={()=> goBack() }> <ArrowLeftOutlined/> {title}</Link>
        </div>
    )
};
