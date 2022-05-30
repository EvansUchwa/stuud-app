import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form"

export function InputRadio({ props }) {
    const { name, choices, label,
        fieldValue, setFieldValue,
        formValues, setFormValues, size } = props
    return <div className={"formSegment  " + (size ? size : " fsFull")}>
        <label> {label} </label>
        <section className="fs-radio_checkbox-row">
            {
                choices.map((item, i) => <label key={"inpur radio or check item nb" + i}>

                    <input type="radio"
                        name={name}
                        value={item.value}
                        onChange={(event) => {
                            formValues ?
                                handleFormValuesChange(event, formValues, setFormValues)
                                : handleFieldChange(event, setFieldValue)

                        }} />
                    <span>{item.label}</span>
                </label>)
            }
        </section>
    </div>
}