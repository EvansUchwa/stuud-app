import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form";
import {
    onlyNumber, onlyNumberWithSpace,
    onlyLetter, onlyLetterWithSpace,
    onlyLetterAndNumber, onlyLetterAndNumberWithSpace
} from '../../Assets/js/dataNormalizer';

const formFunctionsObj = {
    "onlyNumber": onlyNumber, "onlyNumberWithSpace": onlyNumberWithSpace,
    "onlyLetter": onlyLetter, "onlyLetterWithSpace": onlyLetterWithSpace,
    "onlyLetterAndNumberWithSpace": onlyLetterAndNumberWithSpace,
    "onlyLetterAndNumber": onlyLetterAndNumber
}

export function InputText({ props }) {
    const { name, ph, label,
        fieldValue, setFieldValue,
        formValues, setFormValues, normalizer, size } = props
    return <div className={"formSegment  " + (size ? size : " fsFull")}>
        <label> {label} </label>
        <section>
            <input type={"text"} name={name}
                value={formValues ? formValues[name] : fieldValue}
                placeholder={ph}
                onChange={(event) => {
                    if (formFunctionsObj[normalizer](event.target.value)) {
                        formValues ?
                            handleFormValuesChange(event, formValues, setFormValues)
                            : handleFieldChange(event, setFieldValue)
                    }
                }} />
        </section>
    </div>
}



export function InputMail({ props }) {
    const { name, ph, label,
        fieldValue, setFieldValue,
        formValues, setFormValues, size } = props
    return <section>
        <input type="mail" name={name}
            value={formValues ? formValues[name] : fieldValue}
            placeholder={ph}
            onChange={(event) => {
                formValues ?
                    handleFormValuesChange(event, formValues, setFormValues)
                    : handleFieldChange(event, setFieldValue)

            }} />
    </section>
}





export function TextArea({ props }) {
    const { name, ph, label,
        fieldValue, setFieldValue,
        formValues, setFormValues,
        normalizer, size } = props
    return <div className={"formSegment  " + (size ? size : " fsFull")}>
        <label>{label} </label>
        <section>
            <textarea name={name}
                value={formValues ? formValues[name] : fieldValue}
                placeholder={ph}
                onChange={(event) => {
                    if (formFunctionsObj[normalizer](event.target.value)) {
                        formValues ?
                            handleFormValuesChange(event, formValues, setFormValues)
                            : handleFieldChange(event, setFieldValue)
                    }
                }} ></textarea>
        </section>
    </div>
}