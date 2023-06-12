import {useState} from 'react';
import PropTypes from "prop-types";


export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleRest = () => {
        setCounter( counter-1 )
    }

    const handelRestart = () => {
        setCounter( value )
    }

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={  handleAdd }>
                +1
            </button>
            <button onClick={ handleRest } >-1</button>
            <button  aria-label='btn-reset' onClick={ handelRestart } >Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}








