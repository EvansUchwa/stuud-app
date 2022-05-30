import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { AuthedAppLayout, NotAuthedAppLayout } from "./GlobalComponents/Other";
import { LogoLoader } from "./GlobalComponents/loader";
import { useSelector } from "react-redux";
import { loadSelector } from "./Store/selectors/loadSelector";
import { authLinks } from "./Rawdata/links";
import { axiosHeadersSelector, axiosInfos } from "./Store/selectors/axiosSelector";


// const userIsAuthed = { isAuthed: false, profil_completed: false }




export const AuthProtectedRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null);
    const load = useSelector(loadSelector);
    const axiosParams = useSelector(axiosInfos)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (load) {
            setToShow(<LogoLoader />)
        } else {
            if (auth !== null) {
                if (auth.generalInfos) {
                    if (auth.generalInfos && auth.generalInfos.profil_completed === 0) {
                        navigate("/Profil/finalisation")
                    } else {
                        // location.pathname !== "/Profil/finalisation" ? navigate(location.pathname) : navigate("/Dashboard")
                        navigate("/Dashboard")
                    }
                    setToShow(<AuthedAppLayout />)
                } else {
                    setToShow(<LogoLoader />)
                }

            } else {
                navigate(authLinks.connexion)
            }
        }
    }, [auth, load, axiosParams])

    return toShow
}


export const AuthSimpleRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null);
    const load = useSelector(loadSelector);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (load) {
            setToShow(<LogoLoader />)
        } else {
            if (auth !== null) {
                if (auth.generalInfos) {
                    if (auth.generalInfos && !auth.generalInfos.profil_completed) {
                        navigate("/Profil/finalisation")
                    } else {
                        // location.pathname !== "/Profil/finalisation" ? navigate(location.pathname) : navigate("/Dashboard")
                        navigate("/Dashboard")
                    }
                } else {
                    setToShow(<LogoLoader />)
                }
            }
            else {
                setToShow(<NotAuthedAppLayout >
                    <Outlet />
                </NotAuthedAppLayout>)
            }
        }

    }, [auth, load])
    return toShow
}


