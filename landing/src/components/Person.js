import React from 'react'
import {useGlobalContext} from './context/useGlobalContext'

export const Person = () => {
    const {a} = useGlobalContext();
    return (
        <div>
            {a}
        </div>
    )
}