import React from 'react'
import { InputText } from '../../GlobalComponents/Form/text.js'
import { InputPassword } from '../../GlobalComponents/Form/password'


function Login({ props }) {
    const { errors, setErrors,
        formValues, setFormValues } = props;
    return (
        <>
            <div className='formSegment'>
                <label>Pseudo ou Mail</label>
                <InputText props={{
                    name: "pseudoORmail",
                    ph: "Ton pseudo",
                    formValues, setFormValues,
                    normalizer: "onlyLetterAndNumber"
                }} />
            </div>

            <div className='formSegment'>
                <label>Mot de passe</label>
                <InputPassword props={{
                    name: "password",
                    ph: "...",
                    formValues, setFormValues,
                    errors, setErrors
                }} />
            </div>
        </>
    )
}

export async function handleLogin(axios, apiBase, apiHeaders,
    formValues, dispatch, setBtnState, setAuthError,
    setIsAuthed, setAuthHeaderToken, setAuthedGeneralInfo) {
    setBtnState('disableAndLoad')
    try {
        let signOrLog = await axios.post(apiBase + '/auth/login', formValues, { headers: apiHeaders })
        setAuthError('')
        const { token } = signOrLog.data;
        if (token) {
            let userAuthed = await axios.get(apiBase + '/user/getUserConnectedAllInfos',
                { headers: { ...apiHeaders, 'Authorization': 'Bearer ' + token } })
            if (userAuthed.data.mail) {
                setTimeout(() => {
                    dispatch(setIsAuthed())
                    dispatch(setAuthHeaderToken(token))
                    dispatch(setAuthedGeneralInfo(userAuthed.data))
                }, 3000)
            }
        }
    } catch (error) {
        setAuthError(error.response.data.message)
    }
    setBtnState('simple')
}

export default Login
