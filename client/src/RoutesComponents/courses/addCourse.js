import React, { useState } from 'react'
import { InputFile, InputText, InputTags, TextArea, InputRadio, Form } from '../../GlobalComponents/Form.js';
import { coursTypesChoicesArray } from '../../Rawdata/formFields';



export default function AddCourse() {
    const [formValues, setFormValues] = useState({
        type: "", title: "", number: "", year: "", description: "", courseFiles: "", tags: ""
    })
    const [errors, setErrors] = useState([]);
    const typesCourse = [
        { label: "CM", value: "CM" },
        { label: "TD", value: "TD" },

    ]
    return (
        <div className='courses-add'>
            <section>
                <Form props={{ submit: null }}>
                    <InputRadio props={{
                        type: "radio",
                        name: "type", choice: coursTypesChoicesArray,
                        ph: "Type du cours",
                        choices: typesCourse,
                        formValues, setFormValues,
                    }} />
                    <InputText props={{
                        name: "title", label: "Titre du cours",
                        ph: "Titre du cours",
                        formValues, setFormValues,
                        normalizer: "onlyLetterAndNumberWithSpace"
                    }} />
                    <InputText props={{
                        name: "title", label: "Matière du cours",
                        ph: "Anglais,Français,Economie,etc...",
                        formValues, setFormValues,
                        normalizer: "onlyLetterAndNumberWithSpace"
                    }} />
                    <InputText props={{
                        name: "number", label: "Numero du cours",
                        ph: "Cours n* 1",
                        formValues, setFormValues,
                        normalizer: "onlyLetterAndNumberWithSpace",
                        size: "fsSemi"
                    }} />
                    <InputText props={{
                        name: "year", label: "Année du cours",
                        ph: "2020",
                        formValues, setFormValues,
                        normalizer: "onlyNumber",
                        size: "fsSemi"
                    }} />
                    <TextArea props={{
                        name: "description", label: "Description du cours",
                        ph: "Decris ton cours",
                        formValues, setFormValues,
                        normalizer: "onlyLetterAndNumber"
                    }} />
                    <InputFile props={{
                        name: "courseFiles", maxFiles: 4,
                        label: <>Fichier de cours(4 fichiers maximum)  </>,
                        formValues, setFormValues, width: "60px", height: "60px"
                    }} />
                    <InputTags props={{
                        name: "tags", maxTags: 4,
                        label: <>Tag (4 tag maximum)  </>,
                        formValues, setFormValues
                    }} />
                    <div className='formBtn center'>
                        <button>Ajouter ce cours</button>
                    </div>
                </Form>
            </section>
        </div>
    )
}
