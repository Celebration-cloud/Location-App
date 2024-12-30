
export const addPlaces = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "actionType", payload: data })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: "ADD_PLACE", payload: userData})
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}