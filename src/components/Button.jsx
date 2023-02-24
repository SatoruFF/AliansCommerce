import React from 'react'
import '../style/button.scss'
import { Button, Space } from 'antd';

const MyButton = ({...props}) => {
    return (
        <Space>
            <Button className='btn' onClick={() => props.redir(props.id)}>{props.children}</Button>
        </Space>
    );
}

export default MyButton;