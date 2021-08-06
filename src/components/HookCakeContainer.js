import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux';

function HookCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Hook Cake Container</h2>
            <h2>Number of Cakes {noOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
