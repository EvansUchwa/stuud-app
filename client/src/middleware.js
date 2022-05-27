import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { AuthedAppLayout, NotAuthedAppLayout } from "./GlobalComponents/Other";
import { LogoLoader } from "./GlobalComponents/loader";
import { useSelector } from "react-redux";
import { loadSelector } from "./Store/selectors/loadSelector";
import { authLinks } from "./Rawdata/links";


// const userIsAuthed = { isAuthed: false, profil_completed: false }




export const AuthProtectedRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null);
    const load = useSelector(loadSelector)
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        if (load) {
            setToShow(<LogoLoader />)
        } else {
            if (auth !== null) {
                if (auth.generalInfos && auth.generalInfos.profil_completed === 0) {
                    if (location.pathname !== "/Profil/finalisation") {
                        navigate("/Profil/finalisation")
                    }
                } else {
                    if (location.pathname === "/Profil/finalisation") {
                        navigate("/Dashboard")
                    }
                }
                setToShow(<AuthedAppLayout />)

            } else {
                navigate(authLinks.connexion)
            }
        }
    }, [auth, load])

    return toShow
}


export const AuthSimpleRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {

        if (auth !== null) {
            if (location.pathname !== "/Dashboard") {
                navigate('/Dashboard')
            } else {
                setToShow('haha dash')
            }
        }
        else {
            setToShow(<NotAuthedAppLayout >
                <Outlet />
            </NotAuthedAppLayout>)
        }
    }, [auth])
    return toShow
}

