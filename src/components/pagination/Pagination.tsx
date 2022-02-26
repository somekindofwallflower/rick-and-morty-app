import { Pagination } from 'antd';

interface Props {
    currentPage?: number,
    total?: number,
    onChange: any,
    showSizeChanger?: boolean
}


export const BasicPagination = ({ currentPage, total = 0,  onChange, showSizeChanger = false}: Props) => {
    return (
        <Pagination
            current={currentPage}
            pageSize={20}
            total={total}
            onChange={onChange}
            showSizeChanger={showSizeChanger}>
        </Pagination>
    )
}
