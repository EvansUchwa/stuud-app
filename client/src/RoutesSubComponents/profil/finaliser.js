import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Zoom } from "react-reveal";
import {
    handleFieldChange, handleFieldChangeAndSearch
} from "../../Assets/js/form"
import { getError } from "../../Assets/js/formValidator";
import { IllustrationImage } from "../../GlobalComponents/Img";
import { SimpleIconLoader } from "../../GlobalComponents/loader";
import { accountOtherFields } from "../../Rawdata/formFields"
import { authSelector } from "../../Store/selectors/authSelectors";
import { axiosInfos } from "../../Store/selectors/axiosSelector";

export const Finaliser_profil = () => {

    const apiBase = useSelector(axiosInfos).urlBase
    const apiHeaders = useSelector(axiosInfos).headers;
    const userAuthedInfo = useSelector(authSelector)

    const totalStep = 3;
    const steps = {
        step1: [accountOtherFields.sexe, accountOtherFields.age],
        step2: [accountOtherFields.université, accountOtherFields.filière],
        step3: [accountOtherFields.niveau_etude, accountOtherFields.année_scolaire]
    }
    const [formValues, setFormValues] = useState({
        age: "", sexe: "",
        university: "", faculty: "",
        study_level: "", school_year: ""
    });
    const [errors, setErrors] = useState([]);
    const [finaliseError, setFinaliseError] = useState('')
    const [currentStep, setCurrentStep] = useState(1)
    const [achieve, setAchieve] = useState(false);
    const [universityList, setUL] = useState([]);
    const [facultyList, setFL] = useState([])
    const [suggestionResult, setSR] = useState([]);
    const [niveauList, setNL] = useState([
        { nom: 'Licence 1' },
        { nom: 'Licence 2' },
        { nom: 'Licence 3' },
        { nom: 'Master 1' },
        { nom: 'Master 2' },
    ])

    useEffect(() => {
        axios.get(apiBase + '/university/all')
            .then(res => setUL(res.data))
            .catch(err => console.log(err))

        axios.get(apiBase + '/faculty/all')
            .then(res => setFL(res.data))
            .catch(err => console.log(err))
    }, [])

    function previousStep() {
        currentStep >= 1 ? setCurrentStep(currentStep - 1) : setCurrentStep(currentStep)
    }
    function nextStep() {
        currentStep < totalStep ? setCurrentStep(currentStep + 1) : setCurrentStep(currentStep)
    }

    function dispatchBtnOnStepChange(typeBtn) {
        let cond = false;
        if (currentStep == 1) {
            cond = formValues.age != "" && formValues.sexe != ""
        } else if (currentStep == 2) {
            cond = formValues.university != "" && formValues.faculty != ""
        } else if (currentStep == 3) {
            cond = formValues.niveau_etude != "" && formValues.année_scolaire != ""
        }

        if (typeBtn == 'next') {
            if (currentStep > 2) {
                return cond ? <button>J'ai finis</button> : <button className="disabled" disabled>J'ai finis</button>
            } else {
                return cond ? <span onClick={() => nextStep()}>Suivant</span> : <span className="disabled">Suivant</span>
            }
        } else {
            return currentStep > 1 ? <span onClick={() => previousStep()}>Précedent</span>
                : <span className="disabled">Précedent</span>
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            let insertUserInfo = await axios.put(apiBase + '/user/finaliseUserProfil',
                { ...formValues, user_id: userAuthedInfo.generalInfos.id }, { headers: apiHeaders })

            if (insertUserInfo.data.finalised) {
                setAchieve(true)

                setTimeout(() => {
                    window.location = '/Dashboard'
                }, 5000)
            }
        } catch (error) {
            setFinaliseError(error.response.data.message)
        }
        // setAchieve(true)
    }

    function dispatchSuggestion(name) {
        if (name == 'university') {
            return universityList
        } else if (name == 'faculty') {
            return facultyList
        }
        return niveauList
    }



    return <div className="profil-finalisation">
        {
            achieve ? <Zoom right>
                <ProfilFinalisedMessage />
            </Zoom> :
                <>
                    <h1>Finalise ton profil</h1>
                    <h4>Remplir ces informations te permet de rejoindre un groupe</h4>

                    <section className="pf-steps-indicator">
                        {
                            [0, 0, 0].map((step, index) => <div key={"step indic nb" + index}
                                className={(index + 1) <= currentStep ? 'step-active' : ''}>
                                <span className="rounded"> {index + 1}</span>
                            </div>)
                        }
                    </section>

                    <form onSubmit={(event) => handleSubmit(event)}>
                        {/* {
                            steps['step' + currentStep].map((field, index) => <div className="formSegment fsFull"
                                key={"step field nb" + index}>
                                <label>{field.label} </label>
                                <section>
                                    {
                                        ['university', 'faculty', 'study_level'].includes(field.name) ?
                                            dispatchInputSelectTextareaOrImg(formValues, setFormValues,
                                                field, handleFieldChangeAndSearch,
                                                errors, setErrors,
                                                dispatchSuggestion(field.name), suggestionResult, setSR)
                                            : dispatchInputSelectTextareaOrImg(formValues, setFormValues,
                                                field, handleFieldChange,
                                                errors, setErrors)
                                    }
                                    {getError(field.name, errors)}
                                </section>
                            </div>)
                        } */}
                        <div className="stepNavigator">
                            {dispatchBtnOnStepChange('prev')}
                            {dispatchBtnOnStepChange('next')}
                        </div>
                    </form>

                </>
        }
        <div className="fieldError">
            {finaliseError}
        </div>
    </div>
}

const ProfilFinalisedMessage = () => {
    return <div className="profilFinalisedMessage">
        <IllustrationImage props={{ src: "happy.svg", alt: "Profil achieve", className: "" }} />
        <section>
            <h3>Yess !!!</h3>
            <p>
                Les derniers paramètres de ton profil sont en cours d'achevement,
                tu seras rediriger sur ton espace etudiant dans quelques secondes,
            </p>
            <SimpleIconLoader />
        </section>

        {/* <b>
            L'équipe stuud te remercie encore de t'etre inscrits
        </b> */}
    </div>
}