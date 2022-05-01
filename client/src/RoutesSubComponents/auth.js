import { Link } from "react-router-dom"
import { SimpleImage } from "../GlobalComponents/Img"
import { getError } from "../Assets/js/formValidator";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormBtn } from "../GlobalComponents/Button";
import { useSelector, useDispatch } from "react-redux";
import { axiosInfos } from "../Store/selectors/axiosSelector";
import { setIsAuthed, setAuthedGeneralInfo } from "../Store/actions/authActions";
import { setAuthHeaderToken } from "../Store/actions/axiosActions";
import Login from "./auth/login";
import SignUp from "./auth/signUp";

export const AuthHeader = () => {
  return <section className="ab-header">
    <Link to="/">
      <SimpleImage props={{
        src: 'logos/mergeW.png',
        alt: 'jddh'
      }} />
    </Link>
  </section>
}

export const AuthSignOrLogMsg = ({ props }) => {
  const { authType } = props
  function dispatchSignOrLog(authType) {
    if (authType == 'Connexion') {
      return { msg1: "Vous n'avez pas encore de compte ?", msg2: 'Inscrivez vous!', link: 'Authentification/Inscription' }
    } else {
      return { msg1: "Vous avez deja un compte ?", msg2: 'Connectez vous!', link: 'Authentification/Connexion' }
    }
  }
  const signOrLog = dispatchSignOrLog(authType);
  return <div className="log-or-register">
    <p>{signOrLog.msg1}</p>
    <Link to={"/" + signOrLog.link}>{signOrLog.msg2}</Link>
  </div>
}

export const AuthForm = ({ props }) => {
  const btnContent = props.authType === 'Connexion' ? 'Se connecter' : "S'inscrire";
  const apiBase = useSelector(axiosInfos).urlBase;
  const apiHeaders = useSelector(axiosInfos).headers;
  const dispatch = useDispatch();


  const { authType } = props
  const [errors, setErrors] = useState([]);
  const [authError, setAuthError] = useState('');

  const [formValues, setFormValues] = useState({
    pseudo: '', mail: '',
    password: '', password_confirm: '', pseudoORmail: ''
  });

  useEffect(() => {
    const regBtnCond = errors.length === 0 && formValues.pseudo != '' && formValues.mail != ''
      && formValues.password != '' && formValues.password == formValues.password_confirm;
    const logBtnCond = formValues.pseudoORmail != '' && formValues.password != '';

    if (authType == 'Connexion') {
      logBtnCond ? setBtnState('simple') : setBtnState('disable');
    } else {
      regBtnCond ? setBtnState('simple') : setBtnState('disable');
    }

  }, [formValues])
  const [btnState, setBtnState] = useState('disable')
  const [isLoad, setIsLoad] = useState(false)



  async function handleSubmit(event) {
    event.preventDefault();
    const apiUrlEnd = authType === 'Connexion' ? '/login' : '/register'
    setIsLoad(true)
    setBtnState('disableAndLoad')

    try {
      let signOrLog = await axios.post(apiBase + '/auth' + apiUrlEnd, formValues, { headers: apiHeaders })
      setAuthError('')
      if (authType === 'Connexion') {
        const { token } = signOrLog.data;

        if (token) {
          let userAuthed = await axios.get(apiBase + '/user/getUserConnectedAllInfos',
            { headers: { ...apiHeaders, 'Authorization': 'Bearer ' + token } })
          if (userAuthed.data.mail) {
            setTimeout(() => {
              dispatch(setIsAuthed())
              dispatch(setAuthHeaderToken(token))
              dispatch(setAuthedGeneralInfo(userAuthed.data))
            }, 3000)
          }

        }
      } else {
        window.location = '/Mail/lire-mail';
      }
    } catch (error) {
      setAuthError(error.response.data.message)
    }
    setBtnState('simple')


  }

  return <>
    <form onSubmit={(event) => handleSubmit(event)}>
      {
        authType === "Connexion" ? <Login props={{ errors, setErrors, formValues, setFormValues }} />
          : <SignUp props={{ errors, setErrors, formValues, setFormValues }} />
      }
      {<b className="fieldError">{authError}</b>}
      <FormBtn props={{ type: btnState, btnContent }} />
    </form>
  </>
}
