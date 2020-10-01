import { BUY_VAN_IC, BUY_CHOC_IC, BUY_STRAW_IC, ORDER_IC } from './iceCreamTypes'

const initialState = {
    numVanIC: 20,
    numChocIC: 21,
    numStrawIC: 22
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_VAN_IC:
            if (state.numVanIC > 0) {return {...state, numVanIC: state.numVanIC -1}} 
            else {return state}
        case BUY_CHOC_IC:
            if (state.numChocIC > 0) {return {...state, numChocIC: state.numChocIC -1}}
            else {return state}
        case BUY_STRAW_IC:
            if (state.numStrawIC >0) {return {...state, numStrawIC: state.numStrawIC -1}}
            else {return state}
        case ORDER_IC:
            let iCMax = 35;
            let vDiff = iCMax - state.numVanIC;
            let cDiff = iCMax - state.numChocIC;
            let sDiff = iCMax - state.numStrawIC;
            return {...state, numVanIC: state.numVanIC +vDiff, numChocIC: state.numChocIC +cDiff,
                numStrawIC: state.numStrawIC +sDiff}
        default: return state
    }
}
export  default iceCreamReducer