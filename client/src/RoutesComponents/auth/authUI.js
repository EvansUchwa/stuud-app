import { Link } from "react-router-dom";
import { SimpleImage } from "../../GlobalComponents/Img";
import { authLinks } from "../../Rawdata/links";

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
            return { msg1: "Vous n'avez pas encore de compte ?", msg2: 'Inscrivez vous!', link: authLinks.inscription }
        } else {
            return { msg1: "Vous avez deja un compte ?", msg2: 'Connectez vous!', link: authLinks.connexion }
        }
    }
    const signOrLog = dispatchSignOrLog(authType);
    return <div className="log-or-register">
        <p>{signOrLog.msg1}</p>
        <Link to={signOrLog.link}>{signOrLog.msg2}</Link>
    </div>
}

// export function AuthFormBtn(){
//     return
// }