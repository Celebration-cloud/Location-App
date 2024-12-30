const initialState = {
    loading: false,
    allPlaces: [],
    error: null
}
export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOADING": 
            return { ...state, loading: true }
        case "ADD_PLACE":
            return { ...state, allPlaces: [...state.allPlaces, payload] }
        case 
        default: return state
    }
}