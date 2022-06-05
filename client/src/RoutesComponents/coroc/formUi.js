import { useEffect, useState } from 'react';
import { InputText, TextArea } from '../../GlobalComponents/Form/text.js';
import { InputRadio } from '../../GlobalComponents/Form/checkbox_radio.js';
import { InputTags } from '../../GlobalComponents/Form/tag.js';
import { InputFile } from '../../GlobalComponents/Form/file.js';
import { SearchAndSelect } from "../../GlobalComponents/Form/select.js"
import axios from 'axios';
export function CorocForm({ props }) {
    const { type, formValues, setFormValues, axiosBase } = props;
    const [school_subjects, setSchool_subjects] = useState([])
    const typesCourse = [
        { label: "CM", value: "CM" },
        { label: "TD", value: "TD" },
        { label: "Autre", value: "Autre" },
    ]

    useEffect(() => {
        axios.get(axiosBase + '/school_subject/all')
            .then(res => setSchool_subjects(res.data))
            .catch(err => console.log(err))
    }, [])

    return <>
        <InputRadio props={{
            type: "radio", label: "Type de cours",
            name: "type",
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
        <SearchAndSelect props={{
            name: "school_subject", label: "La matière",
            ph: "Anglais,Economie,etc....",
            formValues, setFormValues,
            normalizer: "onlyLetterAndNumberWithSpace",
            dataList: school_subjects, dataSearchKey: "name"
        }} />
        <InputText props={{
            name: "number", label: "Numero du cours",
            ph: "Cours n* 1",
            formValues, setFormValues,
            normalizer: "onlyNumber",
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
            normalizer: "onlyLetterAndNumberWithSpace"
        }} />
        {
            type === "course" && <>
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
            </>
        }
    </>
}

