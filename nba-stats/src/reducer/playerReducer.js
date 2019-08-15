import {
    GET_PLAYER_DATA_START,
    GET_PLAYER_DATA_SUCCESS,
    GET_PLAYER_DATA_FAILURE,
    TOGGLE_STATS
} from '../actions'

const initialState = {
    players: [],
    test: 'This should be working!',
    isLoading: false,
    error: '',
    isSeeStats: false,
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
        case TOGGLE_STATS:
            return {
                ...state,
                isSeeStats: !isSeeStats,
                error: ''
            }
        default:
            return state
    }
}