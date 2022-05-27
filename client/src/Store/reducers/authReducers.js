const defaultValue = null

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHED':
            return { isAuthed: true };

        case 'SET_AUTHED_GENERAL_INFOS':
            return { ...state, generalInfos: action.payload.general };

        case 'SET_AUTH_ON_PROCESS':
            return { ...state, load: action.payload };

        case 'SET_IS_DISCONNECT':
            return null;

        default:
            return state;
    }
}