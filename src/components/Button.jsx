import React from 'react'
import '../style/button.scss'

const Button = ({...props}) => {
    return (
        <div className='btn'>
            <p className='btnItem' onClick={() => props.redir(props.id)}>{props.children}</p>
        </div>
    );
}

export default Button;