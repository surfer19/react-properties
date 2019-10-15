import axios from "axios";

/*
 * CONSTANTS
 */

// fetch properties
export const FETCH_PROPERTIES_BEGIN = "FETCH_PROPERTIES_BEGIN";
export const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";
export const FETCH_PROPERTIES_FAILURE = "FETCH_PROPERTIES_FAILURE"; 

/*
 * FUNCTIONS
 */

// fetch properties
export const fetchMoreProperties = (page) => {    
    return async (dispatch) => {
        try {            
            dispatch(fetchMoreBegin())            
            // call api
            const response = (await axios.get("https://api.emerald-stay.fr/api/properties", {                
                params: {
                    country: 1,
                    adults: 1,
                    children: 0,
                    page: 1
                }
            })).data.data.properties;

            console.log('response', response)

            dispatch(fetchMoreSuccess(response))

        } catch (err) {
            dispatch(fetchMoreFailure(err))
        }
    }
}

function fetchMoreBegin() {
    return  {
        type: FETCH_PROPERTIES_BEGIN
    }
}

function fetchMoreSuccess(responseData) {
    return {
        type: FETCH_PROPERTIES_SUCCESS,
        payload: responseData
    }
}

function fetchMoreFailure(err) {
    return {
        type: FETCH_PROPERTIES_FAILURE,
        error: err
    }
}
