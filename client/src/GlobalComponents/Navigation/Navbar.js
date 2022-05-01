import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setIsDisconnected } from "../../Store/actions/authActions"
import { removeAuthHeaderToken } from "../../Store/actions/axiosActions"
import { ConnexionBtn } from "../Button"
import { SimpleImage } from "../Img"

export const NotConnectedNavbar = () => {
    const navLinks = [
        { label: 'Concept du site', link: "" },
        { label: 'Telecharger le raccourcis', link: "" },
        { label: 'Contact', link: "" },
        { label: 'Notre equipe', link: "" },

    ]
    return <nav className="nav">
        <section className="nav-logo">
            <Link to={"/"}>
                <SimpleImage props={{ src: 'logos/designW.png', alt: 'Logo Menu', className: "" }} />
                <SimpleImage props={{ src: 'logos/letterW.png', alt: 'Logo Menu', className: "" }} />
            </Link>
        </section>
        <section className="nav-pcLinks">
            {
                navLinks.map((lk, index) => <Link to={""}
                    key={"nav pc link" + index}>
                    {lk.label} </Link>)
            }
        </section>

        <section className="nav-auth">
            <ConnexionBtn props={{ className: "semiRounded", label: "Connexion" }} />
        </section>
        <aside></aside>
    </nav>
}


export const ConnectedNavbar = () => {
    const dispatch = useDispatch();

    function disconnectUser() {
        dispatch(removeAuthHeaderToken())
        dispatch(setIsDisconnected())
    }

    function toggleDashSideBar() {
        document.querySelector('.nd-sideBar').classList.toggle('nd-sideBarVisible')
    }

    return <nav className="navDash">
        <section className="nd-menu" onClick={() => toggleDashSideBar()}>
            <i className="mdi mdi-menu"></i>
        </section>
        <section className="nd-logo">
            <SimpleImage props={{ src: 'logos/designB.png', alt: 'Logo Menu', className: "" }} />
        </section>


        <section className="nd-logout" onClick={() => disconnectUser()}>
            <i className="mdi mdi-logout"></i>
        </section>

        <aside className="nd-sideBar">
            <div className="nd-s-body">
                <section className="nd-s-closer">
                    <span onClick={() => toggleDashSideBar()}>
                        <i className="mdi mdi-arrow-left"></i>
                    </span>
                </section>
                <section className="nd-s-links">
                    {
                        [0, 0, 0, 0, 0, 0].map((lk, index) => <Link to={""}
                            key={"dash side lk nb" + index}>
                            <span>
                                Dash Menu Link
                            </span>

                            <i className="mdi mdi-chevron-right"></i>
                        </Link>)
                    }
                </section>
                <section className="nd-s-logout">
                    <span onClick={() => disconnectUser()}>
                        Se deconnecter
                    </span>
                </section>
            </div>
        </aside>
    </nav>
}