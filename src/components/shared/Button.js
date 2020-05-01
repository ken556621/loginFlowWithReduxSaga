import React from 'react';

const Button = function({ text, cb }){
    return(
        <button onClick = { cb }>
            { text }
        </button>
    )
};

export default Button;

