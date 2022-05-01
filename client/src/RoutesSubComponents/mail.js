import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ConnexionBtn, InscriptionionBtn } from "../GlobalComponents/Button";
import { IllustrationImage, SimpleImage } from "../GlobalComponents/Img"
import { SimpleIconLoader } from "../GlobalComponents/loader";

export const MakeMailValidation = ({ props }) => {
    const { axios, axiosBase, axiosHeaders, mailId } = props;
    const [mailIsValidate, setMailIsValidate] = useState(null);
    const [isLoad, setIsLoad] = useState(<SimpleIconLoader />)

    useEffect(() => {
        axios.put(axiosBase + '/auth/validateMail', { mailToken: mailId }, { headers: axiosHeaders })
            .then(res => {
                setTimeout(() => {
                    setMailIsValidate(true)
                    setIsLoad(null)
                }, 2000)
            })
            .catch(res => {
                setTimeout(() => {
                    setMailIsValidate(false)
                    setIsLoad(null)
                }, 2000)

            })

    }, [props])
    return <>
        {isLoad}
        {
            (() => {
                if (mailIsValidate) {
                    return <>
                        <b>Ton mail a été validé avec success </b>
                        <ConnexionBtn props={{ label: 'Connexion' }} />
                    </>
                } else if (mailIsValidate == false) {
                    return <>
                        <b>Desolé :( ,ton mail n'a pas pu etre validé , <br />mais pas d'inquietude tu peut te reinscrire</b>
                        <InscriptionionBtn props={{ label: 'Inscription' }} />
                    </>
                }
                return null
            })()
        }
    </>

}

export const ReadMailMsg = () => {
    return <>
        <IllustrationImage props={{ src: "consulter_mail_1.svg", alt: "User read mail" }} />
        <b>Et Yes !!!,ton inscription a bien été prise en compte <br />
            verifie ta messagerie mail pour valider ton inscription</b>
    </>
}