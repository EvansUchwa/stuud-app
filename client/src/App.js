import Accueil from "./Routes/Accueil";
import { Routes, Route } from "react-router-dom";
import "./Assets/styles/default/index.css";
import "./Assets/styles/default/utilClass.css";
import "./Assets/styles/default/form.css";
import "./Assets/styles/default/error.css";
import "./Assets/styles/default/modal.css";


import "./Assets/js/scroll.js";

import { useEffect } from "react";
import "./Assets/styles/index.scss";
// import "./Assets/styles/courses.scss";

import "./Assets/styles/card.css";
// import "./Assets/styles/students.css";
// import "./Assets/styles/allCourses.css";
// import "./Assets/styles/chat.css";
import Error from "./Routes/Error";
import Dashboard from "./Routes/Dashboard";
import Authentification from "./Routes/Auth";
import MailAction from "./Routes/Mail";
import "./Assets/styles/materialdesignicons.min.css";
import { useLocation, } from "react-router";
import { Profil } from "./Routes/Profil";
import { AuthSimpleRoute, AuthProtectedRoute } from "./middleware";
import { useDispatch, useSelector } from "react-redux";

import { getUserData, setIsAuthed } from "./Store/actions/authActions";
import { setAuthLoad } from "./Store/actions/loadActions";
import { authSelector } from "./Store/selectors/authSelectors";
import CoursesOrRequestOfCourse from "./Routes/Coroc";
import Chat from "./Routes/Chat";
import Student from "./Routes/Student";

import { Modal } from "./GlobalComponents/Modal";
import moment from "moment"
import 'moment/locale/fr'
import { setAuthHeaderToken } from "./Store/actions/axiosActions";
moment.locale("fr");

function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const auth = useSelector(authSelector)
  const authToken = localStorage.getItem('stuud-token')
  const localAuthed = localStorage.getItem('stuud-isAuth')




  useEffect(() => {
    const ac = new AbortController()
    if (localAuthed && authToken) {
      dispatch(setAuthLoad(true))
      dispatch(setAuthHeaderToken(authToken))
      dispatch(setIsAuthed())
      try {
        dispatch(getUserData(authToken))
        dispatch(setAuthLoad(false))

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
      path: "/Auth/:authType", components: <Authentification />, requireAuth: false, hasNav: true
    },

    { path: "/Mail/:mailAction", components: <MailAction />, requireAuth: false, hasNav: true },
    { path: "/Mail/:mailAction/:mailId", components: <MailAction />, requireAuth: false, hasNav: true },

    { path: "/Choice", components: <p>Choisir page</p>, requireAuth: true, hasNav: true },

    { path: "/Dashboard", components: <Dashboard />, requireAuth: true, hasNav: true },
    {
      path: "/Course", components: <CoursesOrRequestOfCourse />, subRoutes: [
        { path: "list", components: <CoursesOrRequestOfCourse props={{ type: "course", courseAction: "list" }} />, requireAuth: true, hasNav: true },
        { path: "add", components: <CoursesOrRequestOfCourse props={{ type: "course", courseAction: "add" }} />, requireAuth: true, hasNav: true },
        { path: "*", components: <p>Erreur fdp haha</p>, requireAuth: false, hasNav: true },

      ]
      , requireAuth: true, hasNav: true
    },
    {
      path: "/Course-request", components: <CoursesOrRequestOfCourse />, subRoutes: [
        { path: "list", components: <CoursesOrRequestOfCourse props={{ type: "course-request", courseAction: "list" }} />, requireAuth: true, hasNav: true },
        { path: "add", components: <CoursesOrRequestOfCourse props={{ type: "course-request", courseAction: "add" }} />, requireAuth: true, hasNav: true },
        { path: "*", components: <p>Erreur fdp haha</p>, requireAuth: false, hasNav: true },
      ]
      , requireAuth: true, hasNav: true
    },
    {
      path: "/Student", components: <Student />, subRoutes: [
        { path: "list", components: <Student props={{ studentAction: "list" }} />, requireAuth: true, hasNav: true },
        { path: "*", components: <p>Erreur fdp haha</p>, requireAuth: false, hasNav: true },
      ]
      , requireAuth: true, hasNav: true
    },
    {
      path: "/Chat", components: <Chat />, subRoutes: [
        { path: "list", components: <Chat props={{ chatAction: "list" }} />, requireAuth: true, hasNav: true },
        { path: "*", components: <p>Erreur fdp haha</p>, requireAuth: false, hasNav: true },
      ]
      , requireAuth: true, hasNav: true
    },
    // { path: "/AskCourse", components: <Dashboard />, requireAuth: true, hasNav: true },


    {
      path: "/Profil",
      components: <Profil />,
      requireAuth: true, hasNav: false
    },
    {
      path: "/Profil/:profilAction",
      components: <Profil />,
      requireAuth: true, hasNav: false
    },
  ];


  const routesMaps = routesTab.map((route, index) => <Route key={'route nb' + index}
    path={route.path}
    element={route.requireAuth ?
      <AuthProtectedRoute auth={auth} /> :
      <AuthSimpleRoute auth={auth} />
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
      {/* <NavMiddleware props={{ currentRoute: location.pathname, auth }} /> */}
      <Modal />
      <Routes>
        {routesMaps}
        <Route path="*" element={<Error props={{ type: '404' }} />} />
      </Routes>
    </>
  );
}

export default App;
