
export const addPlaces = (userData) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
        dispatch({ type: "ADD_PLACE", payload: userData})
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}