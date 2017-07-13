// This is the reducer
// export const BLACK_DIAMOND = false;
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO"

const initialState = {
    currentValue: 0,
    prevVal: [],
    futureVal: []
}

export default function counter(state = initialState, action){
    switch( action.type ){
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                prevVal: [state.currentValue, ...state.prevVal]
                }
        case DECREMENT: 
            return { 
                currentValue: state.currentValue - action.amount,
                prevVal: [state.currentValue, ...state.prevVal]
                
                    }
        case UNDO:
            return{
                currentValue: state.prevVal[0],
                prevVal: state.prevVal.slice(1, state.prevVal.length),
                futureVal: state.currentValue, ...state.prevVal
            } 
        case REDO:
            return{
                currentValue: state.futureVal,
                prevVal: state.currentValue, ...state.prevVal

            }           
        default:
            return state;
    }
}

export function increment( amount ){
    return { amount, type: INCREMENT };
}

export function decrement( amount ){

    return { amount, type: DECREMENT}
}


export function undo( ){
    console.log('clicked')
    return { type: UNDO}
}
export function redo( ){
    console.log('clicked')
    return { type: REDO}
}