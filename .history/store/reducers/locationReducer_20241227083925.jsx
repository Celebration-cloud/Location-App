const initialState = {
    loading: false,
    allPlaces: [],
    error: null
}
export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOADING": 
            return { ...state, loading: true }
        case "ADD_"
        default: return state
    }
}