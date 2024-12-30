
export const addPlaces = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "ADD_", })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}