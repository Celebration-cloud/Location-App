
export const addPlaces = (userData, router) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true })
        dispatch({ type: "ADD_PLACE", payload: userData})
        dispatch({ type: "LOADING", payload: false })
        dispatch({ type: "ERROR", payload: null })
        router.dim
    } catch (error) {
        dispatch({ type: "LOADING", payload: false })
         dispatch({ type: "ERROR", payload: "Unable to add" })
    }
}