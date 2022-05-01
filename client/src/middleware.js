import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, useLocation, useNavigate } from "react-router";
import { ConnectedNavbar, NotConnectedNavbar } from "./GlobalComponents/Navigation/Navbar"
import { Finaliser_profil } from "./RoutesSubComponents/profil/finaliser";
import { authSelector } from './Store/selectors/authSelectors';

// const userIsAuthed = { isAuthed: false, profil_completed: false }


export const NavMiddleware = ({ props }) => {
    const { currentRoute, userIsAuthed } = props;

    return <header>
        {
            (() => {
                if (userIsAuthed.isAuthed) {
                    if (userIsAuthed.generalInfos && userIsAuthed.generalInfos.profil_completed) {
                        return <ConnectedNavbar />
                    } else {
                        return <></>
                    }
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

export const ShowIfConnectedMiddleware = ({ userIsAuthed }) => {
    const location = useLocation()

    if (!userIsAuthed.isAuthed) {
        return <Navigate to={"/Authentification/Connexion"} state={{ from: location }} replace />
    }
    else if (userIsAuthed.generalInfos && !userIsAuthed.generalInfos.profil_completed) {
        return <div className="profil">
            <Finaliser_profil />
        </div>
    }

    return <>
        {
            <Outlet />
        }
    </>
}

export const NotShowIfConnectedMiddleware = ({ userIsAuthed }) => {
    const location = useLocation()

    if (userIsAuthed.isAuthed) {
        return <Navigate to={"/Dashboard"} state={{ from: location }} replace />
    }
    return <>
        <Outlet />
    </>
}

