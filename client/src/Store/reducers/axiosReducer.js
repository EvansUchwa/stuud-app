const defaultHeaders = {
    urlBase: process.env.NODE_ENV === "production" ? window.location.origin : 'http://localhost:3001',
    headers: {
        "api-secret": "3979af088d2327ca3e1303ed4be4c2de",
        "Name": "Stuud-api",
        "Version": "1.0"
    }
}

export const axiosReducer = (state = defaultHeaders, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN_HEADER':
            return { ...state, 'Authorization': 'Bearer ' + action.payload.token };

        case 'REMOVE_AUTH_TOKEN_HEADER':
            return defaultHeaders;


        default:
            return state;
    }
}
