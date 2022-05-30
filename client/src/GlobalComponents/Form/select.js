import { handleFieldChange, handleFormValuesChange } from "../../Assets/js/form";

export function Select({ props }) {
    const { name, ph,
        fieldValue, setFieldValue,
        formValues, setFormValues, options } = props
    return <section>
        <select name={name}
            defaultValue={formValues ? formValues[name] : fieldValue}
            onChange={(event) => {
                formValues ?
                    handleFormValuesChange(event, formValues, setFormValues)
                    : handleFieldChange(event, setFieldValue)
            }}>
            {
                options.map((op, index) => <option value={op.value}
                    key={name + "-select op nb" + index}>
                    {op.label}
                </option>)
            }
        </select>
    </section>
}

export function SearchAndSelect({ props }) {
    const { name, ph, label,
        fieldValue, setFieldValue,
        formValues, setFormValues,
        dataList, dataSearchKey } = props
    const [suggestions, setSuggestions] = useState([]);
    function handleSearch(value) {
        value = value.toLowerCase();
        const filtered = dataList.filter(item => item[dataSearchKey].toLowerCase().
            includes(value))
        setSuggestions(filtered)
    }
    return <div className="formSegment formSegmentSearch">
        <label >{label}</label>
        <section>
            <input type="text" name={name}
                value={formValues ? formValues[name] : fieldValue}
                placeholder={ph}
                onChange={(event) => {
                    handleSearch(event.target.value);
                    formValues ?
                        handleFormValuesChange(event, formValues, setFormValues)
                        : handleFieldChange(event, setFieldValue)

                }} />
            <article className="fss-suggestions">
                {
                    formValues[name] !== "" &&
                    suggestions.map((sug, i) => <span key={"form sugges " + i}
                        onClick={() => {
                            formValues ?
                                setFormValues({ ...formValues, [name]: sug[dataSearchKey] })
                                : setFieldValue(sug[dataSearchKey])
                            setSuggestions([])
                        }}>
                        {sug[dataSearchKey]}
                    </span>)
                }
            </article>
        </section>
    </div>
}