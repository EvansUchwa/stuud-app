import { useState } from "react";
import {
    onlyNumber, onlyNumberWithSpace,
    onlyLetter, onlyLetterWithSpace,
    onlyLetterAndNumber, onlyLetterAndNumberWithSpace
} from '../Assets/js/dataNormalizer';
import { confirmPassword } from '../Assets/js/dataValidator';
import { handleFieldChange, handleFormValuesChange } from '../Assets/js/form';


function setFormError(fieldName, typeError, errors, setErrors, validation) {
    if (typeError == "passwordConfirmation") {
        const copyErrs = [...errors]
        const errorExist = errors.findIndex(err => err.name == fieldName)
        if (!validation) {
            if (errorExist == -1) {
                copyErrs.push({ name: fieldName, message: "Les mots de passe ne correspondent pas" })
                return setErrors(copyErrs)
            }
        }
        else {
            copyErrs.splice(errorExist, 1)
            return setErrors(copyErrs)
        }
    }
}

const functionsObj = {
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
                    if (functionsObj[normalizer](event.target.value)) {
                        formValues ?
                            handleFormValuesChange(event, formValues, setFormValues)
                            : handleFieldChange(event, setFieldValue)
                    }
                }} />
        </section>
    </div>
}

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
                    if (functionsObj[normalizer](event.target.value)) {
                        formValues ?
                            handleFormValuesChange(event, formValues, setFormValues)
                            : handleFieldChange(event, setFieldValue)
                    }
                }} ></textarea>
        </section>
    </div>
}


export const InputFile = ({ props }) => {
    const { name, maxFiles, label, formValues, setFormValues, width, height } = props;
    const [files, setFiles] = useState([])

    function handleFileFieldChange(e) {
        const value = e.target.files[0];
        const name = e.target.name;

        const copyFiles = [...files];
        copyFiles.push(value)
        setFiles(copyFiles)
        if (maxFiles == 1) {
            setFormValues({ ...formValues, [name]: value })
        } else {
            setFormValues({ ...formValues, [name]: copyFiles })
        }
    }
    function handleFileDelete(fileId) {
        const copyFiles = [...files];
        copyFiles.splice(fileId, 1)
        setFiles(copyFiles)
        if (maxFiles == 1) {
            setFormValues({ ...formValues, [name]: '' })
        } else {
            setFormValues({ ...formValues, [name]: copyFiles })
        }
        // console.log(copyFiles)
    }
    const fileLabelStyle = { width, height, lineHeight: width }

    return <div className="formSegmentFile">
        <label>
            {label}
        </label>
        <section className="fsf-filesListAndAddBtn">
            {
                (files.length + 1) <= maxFiles ? <label
                    htmlFor={"cf-" + (files.length + 1)}
                    style={fileLabelStyle}
                >
                    <input type={"file"} name={name}
                        id={"cf-" + (files.length + 1)}
                        onChange={(event) => handleFileFieldChange(event)} />
                    <span>
                        +
                    </span>
                </label> : null
            }

            {

                files.map((ff, idx) => <p className={''}
                    key={'file field nb' + idx}
                    style={fileLabelStyle}
                >
                    {
                        ff.name.split('.').pop()
                    }
                    <i className='mdi mdi-close'
                        onClick={() => handleFileDelete(idx)}>
                    </i>
                    <span>
                        {ff.name}
                    </span>
                </p>)
            }
        </section>

    </div>
}


export const InputTags = ({ props }) => {
    const { name, maxTags, label, formValues, setFormValues } = props;
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const [tagAddOnProcess, setTagAddOnProgress] = useState(false);

    function addTag() {
        setTagAddOnProgress(false)
        const copyTags = [...tags];
        copyTags.push(tag)
        setTags(copyTags)

        // console.log(copyTags)
    }

    function removeTag(tagId) {
        const copyTags = [...tags];
        copyTags.splice(tagId, 1)
        setTags(copyTags)
    }
    return <div className="formSegmentTags">
        <label>
            {label}
        </label>
        {
            !tagAddOnProcess && (tags.length + 1) <= maxTags &&
            <span className="tagAddBtn" onClick={() => setTagAddOnProgress(true)}>Ajouter un tag</span>
        }
        {
            tagAddOnProcess && <section className="fst-form">
                <input type={"text"} placeholder="Matiere,Hashtags,etc...."
                    onChange={(event) => setTag(event.target.value)} />
                <div>
                    <span className="tagAddBtn" onClick={() => addTag()}>Ajouter le tag</span>
                    <span className="tagReturnBtn" onClick={() => setTagAddOnProgress(false)}>Annuler</span>
                </div>
            </section>
        }
        <section className="fst-list">
            {
                tags.map((tg, idx) => <p className={''}
                    key={'tag field nb' + idx}>
                    {tg}
                    <i className="mdi mdi-close"
                        onClick={() => removeTag(idx)}></i>
                </p>)
            }
        </section>
    </div>
}

export function Form({ props, children }) {
    const { submitFunction, classname } = props;

    function handleSumbit(event) {
        event.preventDefault();
        submitFunction();
    }
    return (
        <form onSubmit={(event) => handleSumbit(event)}
            className={classname ? classname : ""}
            onKeyDown={(event) => { event.key == 'Enter' && event.preventDefault(); }}>
            {
                children
            }
        </form>
    )
}
