const initialState = {
    loading: false,
    allPlaces: [],
    error: null
}
export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}