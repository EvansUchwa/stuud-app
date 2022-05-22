import React from 'react'
import { Outlet, useLocation } from 'react-router';
import { ConnectedAsideNav } from './Navigation/Navbar';
import { DashSearchUserOrCourse, DashTitleAndSortBy } from '../RoutesComponents/dashboard/dashElementUI';
export function AppLayout() {
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
                                        <DashSearchUserOrCourse props={{ targetSearch: dashTarget }} />
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


