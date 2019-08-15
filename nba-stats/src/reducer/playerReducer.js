import {
    GET_PLAYER_DATA_START,
    GET_PLAYER_DATA_SUCCESS,
    GET_PLAYER_DATA_FAILURE,
} from '../actions'

const initialState = {
    players: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYER_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_PLAYER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                players: action.payload,
                error: ''
            }
        default:
            return state
    }
}