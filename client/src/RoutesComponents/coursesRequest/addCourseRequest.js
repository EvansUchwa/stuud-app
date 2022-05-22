import React from 'react'
import { Form, InputRadio, InputText, TextArea } from '../../GlobalComponents/Form.js';
import { useState } from 'react';
import { coursTypesChoicesArray } from '../../Rawdata/formFields';

export default function AddAskCourse() {
    const [formValues, setFormValues] = useState({
        type: "", title: "", number: "", year: "", description: "", courseFiles: "", tags: ""
    })
    const [errors, setErrors] = useState([]);

    return (
        <div className='courses-add'>
            <section>
                <Form props={{ submitFunction: null }}>
                    <InputRadio props={{
                        type: "radio",
                        name: "type", choice: coursTypesChoicesArray,
                        ph: "Type du cours",
                        formValues, setFormValues,
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
