import { actionTypes } from './actionTpes';

const URL = ''

export function getData() {
    return dispatch => {
        dispatch({type: actionTypes.GET_DATA})
        return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: actionTypes.GET_DATA_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: actionTypes.GET_DATA_FAILURE,
            }) 
        })
    }
}