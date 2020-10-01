import { BUY_VAN_IC, BUY_CHOC_IC, BUY_STRAW_IC, ORDER_IC} from './iceCreamTypes'

export const buyVanIC = () =>{
    return {
        type: BUY_VAN_IC
    }
}

export const buyChocIC = () =>{
    return {
        type: BUY_CHOC_IC
    }
}

export const buyStrawIC = () =>{
    return {
        type: BUY_STRAW_IC
    }
}

export const orderIC = () =>{
    return {
        type: ORDER_IC
    }
}