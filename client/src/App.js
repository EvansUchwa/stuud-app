import Accueil from "./Routes/Accueil";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Assets/styles/default/index.css";
import "./Assets/styles/default/utilClass.css";
import "./Assets/styles/default/form.css";
import "./Assets/styles/default/error.css";

import "./Assets/js/scroll.js";

import { useEffect } from "react";
import "./Assets/styles/app.css";
import "./Assets/styles/card.css";
import "./Assets/styles/students.css";
import "./Assets/styles/allCourses.css";
import "./Assets/styles/chat.css";


import Error from "./Routes/Error";
import Dashboard from "./Routes/Dashboard";
import Authentification from "./Routes/Auth";
import MailAction from "./Routes/Mail";
import "./Assets/styles/materialdesignicons.min.css";
import { useLocation, } from "react-router";
import { Profil } from "./Routes/Profil";
import { NavMiddleware, NotShowIfConnectedMiddleware, ShowIfConnectedMiddleware } from "./middleware";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { axiosBaseSelector, axiosHeadersSelector } from "./Store/selectors/axiosSelector";
import { setAuthedGeneralInfo, setIsAuthed, setIsDisconnected } from "./Store/actions/authActions";
import { authSelector } from "./Store/selectors/authSelectors";
import { setAuthHeaderToken } from "./Store/actions/axiosActions";
import Courses from "./Routes/Courses";


function App() {
  const location = useLocation()
  const apiBase = useSelector(axiosBaseSelector);
  const apiHeaders = useSelector(axiosHeadersSelector);
  const dispatch = useDispatch();
  const userIsAuthed = useSelector(authSelector)
  const authToken = localStorage.getItem('stuud-token')
  const localAuthed = localStorage.getItem('stuud-isAuth')


  useEffect(async () => {
    const ac = new AbortController()
    if (localAuthed && authToken) {
      try {
        let getUserAuthedInfos = await axios.get(apiBase + '/user/getUserConnectedAllInfos',
          { headers: { ...apiHeaders, 'Authorization': 'Bearer ' + authToken } })
        dispatch(setAuthedGeneralInfo(getUserAuthedInfos.data))

      } catch (error) {
        if (!['/ressourceNotFound', '/pageNotFound', '/offline'].includes(location.pathname)) {
          if (error.response.data.fatal) {
            window.location = '/offline';
          } else if (error.response.data.message) {
            window.location = '/ressourceNotFound'
            // dispatch(setIsDisconnected())
          } else {
            window.location = '/pageNotFound'
          }
        }
      }

    }
    return () => ac.abort();
  }, [])

  const routesTab = [
    { path: "/", components: <Accueil />, requireAuth: false, hasNav: true },
    { path: "/Contact", components: <p>Contact</p>, requireAuth: false, hasNav: true },
    {
      path: "/Authentification/:authType", components: <Authentification />, requireAuth: false, hasNav: true
    },

    { path: "/Mail/:mailAction", components: <MailAction />, requireAuth: false, hasNav: true },
    { path: "/Mail/:mailAction/:mailId", components: <MailAction />, requireAuth: false, hasNav: true },

    { path: "/Choice", components: <p>Choisir page</p>, requireAuth: true, hasNav: true },

    { path: "/Dashboard", components: <Dashboard />, requireAuth: true, hasNav: true },
    {
      path: "/Course", components: <Courses />, subRoutes: [
        { path: "add", components: <Courses props={{ courseAction: "add" }} />, requireAuth: true, hasNav: true },
        { path: "addAsk", components: <Courses props={{ courseAction: "addAsk" }} />, requireAuth: true, hasNav: true },

        { path: "*", components: <p>Erreur fdp haha</p>, requireAuth: false, hasNav: true },

      ]
      , requireAuth: true, hasNav: true
    },
    // { path: "/AskCourse", components: <Dashboard />, requireAuth: true, hasNav: true },


    // {
    //   path: "/Profil",
    //   components: <Profil />,
    //   requireAuth: true, hasNav: false
    // },
    {
      path: "/Profil/:profilAction",
      components: <Profil />,
      requireAuth: true, hasNav: false
    },
  ];


  const routesMaps = routesTab.map((route, index) => <Route key={'route nb' + index}
    path={route.path}
    element={route.requireAuth ?
      <ShowIfConnectedMiddleware userIsAuthed={userIsAuthed} /> :
      <NotShowIfConnectedMiddleware userIsAuthed={userIsAuthed} />
    }>
    {route.subRoutes
      ? <>
        {
          route.subRoutes.map((subRoute, subIndex) => <Route path={subRoute.path}
            key={'route sub nb' + subIndex}
            element={subRoute.components} />)
        }
      </>
      : <Route path={route.path} element={route.components} />}
  </Route>);
  return (
    <>
      <NavMiddleware props={{ currentRoute: location.pathname, userIsAuthed }} />
      <Routes>
        {routesMaps}
        <Route path="*" element={<Error props={{ type: '404' }} />} />
      </Routes>
    </>
  );
}

export default App;
