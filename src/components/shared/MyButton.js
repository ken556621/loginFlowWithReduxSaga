import React from 'react';

const MyButton = function({ text, cb }){
    return(
        <button onClick = { cb }>
            { text }
        </button>
    )
};

export default MyButton;

