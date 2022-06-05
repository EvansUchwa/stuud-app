import React, { useEffect, useState } from 'react'

import { Form } from '../../GlobalComponents/Form/index.js';
import { coursTypesChoicesArray } from '../../Rawdata/formFields';
import { CourseCard } from '../../GlobalComponents/Card.js';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { axiosBaseSelector, axiosHeadersSelector } from '../../Store/selectors/axiosSelector.js';
import { BreadCumbs } from '../../GlobalComponents/Navigation/Other.js';
import { setSimpleToaster } from '../../Store/actions/toastActions.js';
import { Link } from 'react-router-dom';
import { CorocForm } from './formUi.js';


function emptyObject(object) {
    for (const key in object) {
        if (Array.isArray(object[key] == [])) {
            object[key] = []
        } else {
            object[key] = '';
        }
    }

    return object;
}

export default function Add_coroc({ props }) {
    const { auth, type } = props;
    const { generalInfos } = auth;
    const { pseudo, faculty, university } = generalInfos;
    const [added, setAdded] = useState({ status: false, id: null })
    const axiosBase = useSelector(axiosBaseSelector);
    const axiosHeaders = useSelector(axiosHeadersSelector);

    const dispatch = useDispatch();



    const [formValues, setFormValues] = useState({
        type: "", title: "", school_subject: "", number: "", year: "", description: "", courseFiles: "", tags: ""
    })
    const [errors, setErrors] = useState([]);


    function dispatchFormUITextAndBtn() {
        if (type === "course") {
            return { formBtnText: "Ajouter le cours", formTitle: "Publie ton cours" }
        } else {
            return { formBtnText: "Ajouter la demande de cours", formTitle: "Publie ta demande de cours" }
        }
    }

    async function handleSubmit() {
        let bodyToSet = null;
        if (type === "course") {
            bodyToSet = new FormData();
            bodyToSet.append('user_id', auth.generalInfos.id)
            bodyToSet.append('date_now', Date.now())
            for (const key in formValues) {
                if (key != "courseFiles") {
                    bodyToSet.append(key, formValues[key])
                }
            }
            for (let index = 0; index < formValues.courseFiles.length; index++) {
                bodyToSet.append("courseFiles", formValues.courseFiles[index])
            }
        } else {
            bodyToSet = { ...formValues, user_id: auth.generalInfos.id, date_now: Date.now() }
        }
        let reqUrl = type === "course" ? "/Course/add" : "/Course-request/add"
        try {
            const addCourse = await axios.post(axiosBase + reqUrl, bodyToSet, { headers: axiosHeaders })
            if (addCourse.data.id) {
                emptyObject(formValues);
                setAdded({ status: true, id: addCourse.data.id });
            }
        } catch (error) {
            dispatch(setSimpleToaster('error'))
        }

    }
    if (added.status) {
        return <CourseAdded props={{ type, setAdded, addedId: added.id }} />
    }
    return (<>
        <BreadCumbs props={{ currentPage: "Ajout", lastPageLink: '' }} />
        <h1>{dispatchFormUITextAndBtn().formTitle}</h1>
        <div className='courses-add'>
            <section className='ca-cardPreview'>
                <CourseCard props={{
                    cardType: "fileNbStyle_" + type, autor: pseudo,
                    coroc: { ...formValues, id: null, faculty: "Science de la vie et de la terre" },
                }} />
            </section>
            <section className='ca-form'>
                <Form props={{ submit: null, submitFunction: handleSubmit }}>
                    <CorocForm props={{ type, axiosBase, formValues, setFormValues }} />
                    <div className='formBtn center'>
                        <button>{dispatchFormUITextAndBtn().formBtnText}</button>
                    </div>
                </Form>

            </section>

        </div>
    </>
    )
}


function CourseAdded({ props }) {
    const { type, setAdded, addedId } = props;
    function dispatchCorcLinksTextAndBtn() {
        if (type === "course") {
            return {
                visualisationLink: "/Course/", visualisationText: "Visualise mon cours",
                statusText: "ton cours a bien été ajouté"
            }
        } else {
            return {
                visualisationLink: "/Course-request/", visualisationText: "Visualise ma demande de cours",
                statusText: "ta demande de cours a bien été ajoutée"
            }
        }
    }
    return <div className='courses-added'>
        <h1>
            Haha Merci Bg, {dispatchCorcLinksTextAndBtn().statusText} !
        </h1>
        <p>Tu gagne 5 stuudycoin :)</p>
        <section>
            <button onClick={() => setAdded(false)}>Revenir en arrière</button>
            <Link to={dispatchCorcLinksTextAndBtn().visualisationLink + addedId}>
                {dispatchCorcLinksTextAndBtn().visualisationText}
            </Link>
        </section>
    </div>
}