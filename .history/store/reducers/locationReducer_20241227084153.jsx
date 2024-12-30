const initialState = {
    loading: false,
    allPlaces: [],
    error: null
}
export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOADING": 
            return { ...state, loading: true }
        case "ADD_PLACE":
            return { ...state, allPlaces: [...state.allPlaces, payload] }
        case "ERROR":
            return { ...state, error: payload }
        default: return state
    }
}