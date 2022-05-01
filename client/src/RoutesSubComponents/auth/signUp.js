import React from 'react'
import { InputMail, InputPassword, InputText } from '../../GlobalComponents/Form.js'

function SignUp({ props }) {
    const { errors, setErrors, formValues, setFormValues } = props;

    return (
        <>
            <div className='formSegment'>
                <label>Pseudo</label>
                <InputText props={{
                    name: "pseudo",
                    ph: "Ton pseudo",
                    formValues, setFormValues,
                    normalizer: "onlyLetterAndNumber"
                }} />
            </div>
            <div className='formSegment'>
                <label>Mail</label>
                <InputMail props={{
                    name: "mail",
                    ph: "Ton mail",
                    formValues, setFormValues,
                }} />
            </div>
            <div className='formSegment'>
                <label>Mot de passe</label>
                <InputPassword props={{
                    name: "password",
                    ph: "Ton mot de passe",
                    formValues, setFormValues,
                    errors, setErrors
                }} />
            </div>
            <div className='formSegment'>
                <label>Confirmer Mot de passe</label>
                <InputPassword props={{
                    name: "password_confirm",
                    ph: "Confirmation ...",
                    formValues, setFormValues,
                    errors, setErrors, isConfirmation: true
                }} />
            </div>

        </>
    )
}

export default SignUp
