export const authReducer = (state = { isAuthed: false }, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHED':
            return { ...state, isAuthed: true };

        case 'SET_AUTHED_GENERAL_INFOS':
            return { ...state, generalInfos: action.payload.general };

        case 'SET_IS_DISCONNECT':
            return { isAuthed: false, generalInfos: null };

        default:
            return localStorage.getItem('stuud-isAuth') ? { isAuthed: true } : state;
    }
}