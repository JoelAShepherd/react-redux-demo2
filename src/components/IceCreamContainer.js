import React from 'react'
import {connect} from 'react-redux'
import {buyVanIC, buyChocIC, buyStrawIC, orderIC} from './redux/index'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Vanilla IceCreams - {props.numVanIC}</h2>
            <button onClick={props.buyVanIC}>Buy Vanilla IceCream</button>
            <h2>Number of Chocolate IceCreams - {props.numChocIC}</h2>
            <button onClick={props.buyChocIC} >Buy Chocolate IceCream</button>
            <h2>Number of Strawberry IceCreams - {props.numStrawIC}</h2>
            <button onClick={props.buyStrawIC}>Buy Strawberry IceCream</button>
            <br />
            <button onClick={props.orderIC}>Order IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numVanIC: state.iceCream.numVanIC,
        numChocIC: state.iceCream.numChocIC,
        numStrawIC: state.iceCream.numStrawIC
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyVanIC: () => dispatch (buyVanIC()),
        buyChocIC: () => dispatch (buyChocIC()),
        buyStrawIC: () => dispatch (buyStrawIC()),
        orderIC: () => dispatch (orderIC())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(IceCreamContainer)