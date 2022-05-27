import { Link } from "react-router-dom"
import { dispatchBtn } from "../Assets/js/formValidator"
import { authLinks } from "../Rawdata/links"

export const FormBtn = ({ props }) => {
    return <div className="formBtn">
        {
            dispatchBtn(props.type, props.btnContent)
        }
    </div>
}

export const ConnexionBtn = ({ props }) => {
    const { className, label } = props;
    const getClass = props.className ? className : ""


    return <Link to={authLinks.connexion}
        className={getClass}>{label}</Link>

}

export const InscriptionionBtn = ({ props }) => {
    const { className, label } = props;
    const getClass = props.className ? className : ""

    return <Link to={authLinks.inscription}
        className={getClass}>
        {label}</Link>
}

export const AuthBtn = () => {
    return <>
        <Link to="/Authentification/Inscription" >Connexion</Link>
        <Link to="/Authentification/Inscription">Inscription</Link>
    </>
}