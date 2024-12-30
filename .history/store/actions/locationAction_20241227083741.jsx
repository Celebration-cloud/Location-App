
export const addPlaces = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true })
        dispatch({ type: "ADD_PLACE", payload: userData})
        dispatch({ type: "LOADING", payload: false })
        dispatch({ type: "LOADING", payload: false })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}