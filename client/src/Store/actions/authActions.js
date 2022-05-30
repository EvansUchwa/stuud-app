import axios from "axios"
import { defaultApiHeaders, getApiUrlBase } from "../../utils/api"

export const setIsAuthed = () => {
    window.localStorage.setItem('stuud-isAuth', true)
    return {
        type: 'SET_IS_AUTHED',
    }
}

export const setIsDisconnected = () => {
    window.localStorage.removeItem('stuud-isAuth')
    return {
        type: 'SET_IS_DISCONNECT',
    }
}

export const setAuthedGeneralInfo = (generalInfos) => {
    return {
        type: 'SET_AUTHED_GENERAL_INFOS',
        payload: { general: generalInfos }
    }
}

export function getUserData(authToken) {

    return async (dispatch) => {
        const authData = await axios.get(getApiUrlBase() + '/user/getUserConnectedAllInfos',
            { headers: { ...defaultApiHeaders, 'Authorization': 'Bearer ' + authToken } })
        dispatch(setAuthedGeneralInfo(authData.data))
    }
}

// SET_AUTHED_GENERAL_INFOS
// SET_AUTHED_TOKEN