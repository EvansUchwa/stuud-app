import React from 'react'
import { InputPassword, InputText } from '../../GlobalComponents/Form.js'

function Login({ props }) {
    const { errors, setErrors, formValues, setFormValues } = props;
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

export default Login
