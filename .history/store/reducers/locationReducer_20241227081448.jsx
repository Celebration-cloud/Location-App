const initialState = {
    loading: false,
    allPla: [],
    error: null
}
export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}