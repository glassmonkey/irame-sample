import React, { useState, useEffect } from 'react';

export const Button = () => {

    const [state, setState] = useState(0);

    return (
        <div>
            <div onClick= { () => setState(state + 1) } >
               click
            </div>
        </div> 
    )
}
