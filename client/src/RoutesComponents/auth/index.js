import { useEffect, useState } from "react";
import axios from "axios";
import { FormBtn } from "../../GlobalComponents/Button";
import { useSelector, useDispatch } from "react-redux";
import { axiosInfos } from "../../Store/selectors/axiosSelector";
import { setIsAuthed, setAuthedGeneralInfo } from "../../Store/actions/authActions";
import { setAuthHeaderToken } from "../../Store/actions/axiosActions";
import Login, { handleLogin } from "./login";
import SignUp, { handleSignUp } from "./signUp";
import { Form } from "../../GlobalComponents/Form";


export const AuthForm = ({ props }) => {
  const { authType } = props
  const btnContent = authType === 'Connexion' ? 'Se connecter' : "S'inscrire";
  const apiBase = useSelector(axiosInfos).urlBase;
  const apiHeaders = useSelector(axiosInfos).headers;
  const dispatch = useDispatch();


  const [errors, setErrors] = useState([]);
  const [authError, setAuthError] = useState('');
  const [btnState, setBtnState] = useState('disable')
  const [formValues, setFormValues] = useState({
    pseudo: '', mail: '',
    password: '', password_confirm: '', pseudoORmail: ''
  });

  useEffect(() => {
    const regBtnCond = errors.length === 0 && formValues.pseudo != '' && formValues.mail != ''
      && formValues.password != '' && formValues.password == formValues.password_confirm;
    const logBtnCond = formValues.pseudoORmail != '' && formValues.password != '';

    const finalCond = regBtnCond | logBtnCond;
    finalCond ? setBtnState('simple') : setBtnState('disable');
  }, [formValues])



  function dispatchFormHandler() {
    if (authType === 'Connexion') {
      return handleLogin(axios, apiBase, apiHeaders,
        formValues, dispatch, setBtnState, setAuthError,
        setIsAuthed, setAuthHeaderToken, setAuthedGeneralInfo)
    } else {
      return handleSignUp(axios, apiBase, apiHeaders,
        formValues, dispatch, setBtnState, setAuthError)
    }
  }

  return <Form props={{ submitFunction: dispatchFormHandler }} >
    {
      authType === "Connexion" ?
        <Login props={{
          errors, setErrors, formValues, setFormValues
        }} />
        :
        <SignUp props={{
          errors, setErrors, formValues, setFormValues
        }} />
    }
    {<b className="fieldError">{authError}</b>}
    <FormBtn props={{ type: btnState, btnContent }} />
  </Form>
}
