const defaultValue = false

export const loadReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case 'SET_AUTH_ON_PROCESS':
            return action.payload;

        default:
            return state;
    }
}