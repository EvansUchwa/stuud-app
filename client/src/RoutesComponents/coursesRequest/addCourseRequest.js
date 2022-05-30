import React from 'react'
import { InputText, TextArea } from '../../GlobalComponents/Form/text.js';
import { InputRadio } from '../../GlobalComponents/Form/checkbox_radio.js';
import { InputTags } from '../../GlobalComponents/Form/tag.js';
import { InputFile } from '../../GlobalComponents/Form/file.js';
import { Form } from '../../GlobalComponents/Form/index.js';
import { useState } from 'react';
import { coursTypesChoicesArray } from '../../Rawdata/formFields';
import { CourseCard } from '../../GlobalComponents/Card.js';

export default function AddAskCourse({ props }) {
    const { auth } = props;
    const { generalInfos } = auth;
    const { pseudo, faculty, university } = generalInfos
    const [formValues, setFormValues] = useState({
        type: "", title: "", school_subject: "", number: "", year: "", description: "", courseFiles: "", tags: ""
    })
    const [errors, setErrors] = useState([]);

    return (
        <div className='courses-request-add'>
            <section className='cra-cardPreview'>
                <CourseCard props={{
                    cardType: "requestedCourse", id: null, type: formValues.type,
                    title: formValues.title, faculty,
                    number: formValues.number, autor: pseudo,
                    fileCount: 'Aucun'
                }} />
            </section>
            <section className='cra-form'>
                <Form props={{ submitFunction: null }}>
                    <InputRadio props={{
                        type: "radio",
                        label: "Tye de cours",
                        name: "type", choices: coursTypesChoicesArray,
                        ph: "Type du cours",
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
                        name: "year", label: "Année du cours",
                        ph: "2020",
                        formValues, setFormValues,
                        normalizer: "onlyNumber",
                    }} />
                    <TextArea props={{
                        name: "description", label: "Description du cours",
                        ph: "Decris ton cours",
                        formValues, setFormValues,
                        normalizer: "onlyLetterAndNumber"
                    }} />
                    <div className='formBtn center'>
                        <button>Ajouter la demande</button>
                    </div>
                </Form>
            </section>
        </div>
    )
}
