import { useState, useEffect } from "react"
import { InputRadio, InputText, SearchAndSelect } from "../../../GlobalComponents/Form"
import axios from "axios"

export function FormStep1({ props }) {
    const { formValues, setFormValues } = props
    return <>
        <InputRadio props={{
            name: "sexe", choices: [
                { label: "Homme", value: "Homme" }
                , { label: "Femme", value: "Femme" }
            ],
            formValues, setFormValues,
        }} />

        <InputText props={{
            name: "age", label: "Ton age",
            ph: "18",
            formValues, setFormValues,
            normalizer: "onlyNumber",
        }} />
    </>
}


export function FormStep2({ props }) {
    const { formValues, setFormValues, apiBase } = props
    const [universityList, setUL] = useState([]);
    const [facultyList, setFL] = useState([])
    const dataList = [
        { name: "Paul vallery" },
        { name: "Paul Jean" },
        { name: "Paul Baugard" },
        { name: "Paul Ringard" },

    ]


    useEffect(() => {
        axios.get(apiBase + '/university/all')
            .then(res => setUL(res.data))
            .catch(err => console.log(err))

        axios.get(apiBase + '/faculty/all')
            .then(res => setFL(res.data))
            .catch(err => console.log(err))
    }, [])
    return <>
        <SearchAndSelect props={{
            name: "university", label: "Ton université",
            ph: "Paul Vallery..",
            formValues, setFormValues,
            normalizer: "onlyLetterAndNumberWithSpace",
            dataList: universityList, dataSearchKey: "name"
        }} />
        <SearchAndSelect props={{
            name: "faculty", label: "Ta fiière",
            ph: "Archélogie",
            formValues, setFormValues,
            normalizer: "onlyLetterAndNumberWithSpace",
            dataList: facultyList, dataSearchKey: "name"
        }} />
    </>
}

export function FormStep3({ props }) {
    const { formValues, setFormValues } = props;
    const [niveauList, setNL] = useState([
        { name: 'Licence 1' },
        { name: 'Licence 2' },
        { name: 'Licence 3' },
        { name: 'Master 1' },
        { name: 'Master 2' },
    ])
    return <>
        <SearchAndSelect props={{
            name: "study_level", label: "Ton niveau scolaire",
            ph: "License 1,License 2,etc..",
            formValues, setFormValues,
            normalizer: "onlyLetterAndNumberWithSpace",
            dataList: niveauList, dataSearchKey: "name"
        }} />
        <InputText props={{
            name: "school_year", label: "Ton année scolaire",
            ph: "2022",
            formValues, setFormValues,
            normalizer: "onlyNumber",
        }} />
    </>
}

function FormStep4({ props }) {
    const { formValues, setFormvalues } = props
    return <>
        4eme niveau lol
    </>
}