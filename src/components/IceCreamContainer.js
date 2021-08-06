import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamConatiner(props){
    return(
        <div>
            <h2>Ice Cream Container</h2>
            <h2>Number of Ice Cream {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )    
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamConatiner);