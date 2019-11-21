import { actionTypes } from './actionTpes';


const initialState ={
    loading : false,
    data: null
}
export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.GET_DATA:
            return Object.assign({}, state, {
                loading: true
            })
            break;
        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.payload
            })
            break;
        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                loading: false
            })
            break;
    
        default:
            break;
    }
   
}