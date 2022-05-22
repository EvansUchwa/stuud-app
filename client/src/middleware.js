import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, useLocation, useNavigate } from "react-router";
import { NotConnectedNavbar } from "./GlobalComponents/Navigation/Navbar"
import { AppLayout } from "./GlobalComponents/Other";
import { LogoLoader } from "./GlobalComponents/loader";

// const userIsAuthed = { isAuthed: false, profil_completed: false }


export const NavMiddleware = ({ props }) => {
    const { currentRoute, auth } = props;
    const location = useLocation()
    return <header>
        {
            (() => {
                if (auth.isAuthed) {
                    if (auth.generalInfos && auth.generalInfos.profil_completed) {
                        return null;
                    }
                    // return <ConnectedAsideNav props={{ locationPath: location.pathname }} />
                } else {
                    if (['/Authentification/Inscription', '/Authentification/Connexion'].includes(currentRoute)) {
                        return <></>
                    } else {
                        return <NotConnectedNavbar />
                    }
                }
            })()
        }
    </header>
}

export const AuthProtectedRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null)
    const location = useLocation();
    useEffect(() => {

        if (!auth.isAuthed) {
            window.location = '/Authentification/Connexion'
        }
        else {
            if (auth.generalInfos) {
                if (auth.generalInfos && auth.generalInfos.profil_completed === 0) {
                    if (location.pathname !== "/Profil/finalisation") {
                        window.location = "/Profil/finalisation"
                    } else {
                        setToShow(<AppLayout />)
                    }
                } else {
                    if (location.pathname === "/Profil/finalisation") {
                        window.location = "/Dashboard"
                    } else {
                        setToShow(<AppLayout />)
                    }

                }

            } else {
                setToShow(<LogoLoader />)
            }

        }
    }, [auth])

    return <>{toShow} </>
}


export const AuthSimpleRoute = ({ auth }) => {
    const [toShow, setToShow] = useState(null);
    const location = useLocation();
    useEffect(() => {

        if (auth.isAuthed) {
            if (location.pathname !== "/Dashboard") {
                window.location = "/Dashboard"
            }
        }
        else {
            setToShow(<Outlet />)
        }
    }, [auth])
    return toShow
}

