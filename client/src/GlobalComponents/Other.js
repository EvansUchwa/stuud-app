import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router';
import { ConnectedAsideNav } from './Navigation/Navbar';
import { DashSearchAccountAndNotices, DashTitleAndSortBy } from '../RoutesComponents/dashboard/dashElementUI';
import { NotConnectedNavbar } from './Navigation/Navbar';

export function NotAuthedAppLayout({ children }) {

    const location = useLocation();
    const [hideNav, setHideNav] = useState(false)

    useEffect(() => {
        if (['/Auth/Inscription', '/Auth/Connexion'].includes(location.pathname)) {
            setHideNav(true)
        } else {
            setHideNav(false)
        }
    }, [location.pathname])
    return (<>
        {
            hideNav ? children : <>
                <NotConnectedNavbar />
                {children}
            </>
        }
    </>
    )
}
export function AuthedAppLayout() {
    let dashTarget = '';
    const location = useLocation();


    if (location.pathname === "/Course/list") {
        dashTarget = "Cours"
    }
    else if (location.pathname === "/Course-request/list") {
        dashTarget = "Demande de cours"
    }
    else if (location.pathname === "/Student/list") {
        dashTarget = "Etudiants"
    }
    return (<div className="loggedMain">
        {
            location.pathname != "/Profil/finalisation"
                ? <>
                    <ConnectedAsideNav props={{ locationPath: location.pathname }} />
                    <div className="lm-content">
                        {
                            (() => {
                                if (["/Course/list", "/Course-request/list", "/Student/list"].includes(location.pathname)) {
                                    return <>
                                        <DashSearchAccountAndNotices props={{ targetSearch: dashTarget }} />
                                        <DashTitleAndSortBy props={{ target: dashTarget }} />
                                    </>
                                }
                            })()
                        }
                        <Outlet />
                    </div>
                </>
                : <Outlet />
        }



    </div>
    )
}


