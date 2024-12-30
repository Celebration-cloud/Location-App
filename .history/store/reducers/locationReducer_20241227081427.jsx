const initialState = {
    loading: false,
    data: [],
    error: null
    
}
export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}