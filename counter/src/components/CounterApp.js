import React from 'react'
import CurrentNumber from '../containers/CurrentNumber'
import IncrementButton from '../containers/IncrementButton'
import DecrementButton from '../containers/DecrementButton'

const CounterApp = () => (
    <div>
        <CurrentNumber />
        <IncrementButton />
        <DecrementButton />
    </div>
)

export default CounterApp
