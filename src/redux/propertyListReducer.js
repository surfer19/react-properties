import { 
    FETCH_PROPERTIES_BEGIN,
    FETCH_PROPERTIES_SUCCESS,
    FETCH_PROPERTIES_FAILURE
} from "./propertyListActions"

const defaultState = {
    fetchedProperties: []
}

const streamListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES_BEGIN:
            return {
                ...state
            }
        case FETCH_PROPERTIES_SUCCESS:
            return {
                ...state,
                fetchedProperties: action.payload
            }
        case FETCH_PROPERTIES_FAILURE:
            return {
                ...state
            }
        default: 
            return state
    }
}

export default streamListReducer;