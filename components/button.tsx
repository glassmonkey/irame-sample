import React, { useState, useEffect } from 'react';
import styles from '@components/button.module.scss'

export const Button = () => {

    const [state, setState] = useState(0);

    return (
        <div>
            <div onClick= { () => setState(state + 1) } className={`${styles.counter} ${styles.gaming}`} >
               count: {state}
            </div>
        </div> 
    )
}
