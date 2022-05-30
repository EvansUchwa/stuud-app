import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form";
import { confirmPassword } from '../../Assets/js/dataValidator';
import { setFormError } from "../../Assets/js/form";
export function InputPassword({ props }) {
    const { name, ph,
        fieldValue, setFieldValue,
        formValues, setFormValues,
        errors, setErrors, isConfirmation } = props

    function handlePwdView(event) {
        if (event.target.previousSibling.getAttribute('type') == 'password') {
            event.target.setAttribute('class', "password-icon-visible mdi mdi-eye")
            event.target.previousSibling.setAttribute('type', 'text')
        } else {
            event.target.previousSibling.setAttribute('type', 'password')
            event.target.setAttribute('class', 'password-icon mdi mdi-eye-off-outline')
        }
    }
    return <section>
        <input type={"password"} name={name}
            value={formValues ? formValues[name] : fieldValue}
            placeholder={ph}
            onChange={(event) => {
                formValues ?
                    handleFormValuesChange(event, formValues, setFormValues)
                    : handleFieldChange(event, setFieldValue)
                if (isConfirmation) {
                    const validation = confirmPassword(isConfirmation, event.target.value)
                    setFormError(name, 'passwordConfirmation',
                        errors, setErrors, validation)
                }

            }} />
        <span className="password-icon mdi mdi-eye-off-outline"
            onClick={(event) => handlePwdView(event)}>
        </span>
    </section>
}