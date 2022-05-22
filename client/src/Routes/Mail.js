import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import '../Assets/styles/mail.css'
import { ReadMailMsg, MakeMailValidation } from '../RoutesComponents/mail';
import { axiosBaseSelector, axiosHeadersSelector } from "../Store/selectors/axiosSelector";

export const MailAction = () => {
    const urlParam = useParams();
    const axiosBase = useSelector(axiosBaseSelector)
    const axiosHeaders = useSelector(axiosHeadersSelector)

    const { mailAction, mailId } = urlParam;
    const dispatchMailComponent = (mailActionType) => {
        if (mailActionType == 'lire-mail' && !mailId) {
            return <ReadMailMsg />
        } else if (mailAction == 'confirmation' && mailId) {
            return <MakeMailValidation props={{ axios, axiosBase, axiosHeaders, mailId }} />
        }
    }
    return <div className='mailContainer'>
        <section className='mcscBody'>
            {dispatchMailComponent(mailAction)}
        </section>
    </div>
}


export default MailAction;