import React, { useState } from 'react'
import { InputText, TextArea } from '../../GlobalComponents/Form/text.js';
import { InputRadio } from '../../GlobalComponents/Form/checkbox_radio.js';
import { InputTags } from '../../GlobalComponents/Form/tag.js';
import { InputFile } from '../../GlobalComponents/Form/file.js';
import { Form } from '../../GlobalComponents/Form/index.js';
import { coursTypesChoicesArray } from '../../Rawdata/formFields';
import { CourseCard } from '../../GlobalComponents/Card.js';



export default function AddCourse({ props }) {
    const { auth } = props;
    const { generalInfos } = auth;
    const { pseudo, faculty, university } = generalInfos
    const [formValues, setFormValues] = useState({
        type: "", title: "", school_subject: "", number: "", year: "", description: "", courseFiles: "", tags: ""
    })
    const [errors, setErrors] = useState([]);
    const typesCourse = [
        { label: "CM", value: "CM" },
        { label: "TD", value: "TD" },

    ]
    return (
        <div className='courses-add'>
            <section className='ca-cardPreview'>
                <CourseCard props={{
                    cardType: "publishedCourse", id: null, type: formValues.type,
                    title: formValues.title, faculty: "Science de la vie et de la terre",
                    number: formValues.number, autor: pseudo,
                    fileCount: formValues.courseFiles.length
                }} />
            </section>
            <section className='ca-form'>
                <Form props={{ submit: null }}>
                    <InputRadio props={{
                        type: "radio", label: "Type de cours",
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
                        name: "school_subject", label: "Matière du cours",
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
