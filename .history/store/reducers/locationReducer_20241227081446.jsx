const initialState = {
    loading: false,
    all: [],
    error: null
}
export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}