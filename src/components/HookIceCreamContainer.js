import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream } from '../redux';

function HookIceCreamContainer() {
    const noOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Hook Ice Cream Container</h2>
            <h2>Number of Ice Creams {noOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default HookIceCreamContainer
