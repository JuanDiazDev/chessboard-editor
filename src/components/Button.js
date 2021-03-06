import React from 'react'
import './../css/Button.css'

const Button = (props) => {
    return (
        <button onClick = {props.onClick} className="button">
            {props.text}
        </button>
    )
}

export default Button

