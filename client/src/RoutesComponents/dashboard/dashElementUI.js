import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { SimpleImage } from "../../GlobalComponents/Img";
import { useDispatch } from "react-redux";
import { removeAuthHeaderToken } from "../../Store/actions/axiosActions";
import { setIsDisconnected } from "../../Store/actions/authActions";
export const DashTitleAndSortBy = ({ props }) => {
    const { target } = props;
    function dispatchTitle() {
        if (target == "Cours") {
            return "Derniers cours ajoutés"
        } else if (target == "Demande de cours") {
            return "Dernières demande de cours"
        }
        else if (target == "Etudiants") {
            return "Derniers etudiants inscrits"
        }
    }
    return <div className="dash-titleAndSortBy">
        <section>
            <h1>{dispatchTitle()} </h1>
            {/* <Link to="">Ajouter un cours</Link> */}
        </section>

        <section>
            <SimpleImage props={{ src: "visuels/filter1.png", alt: "Filter pic" }} />
            <p>
                <span>Trier de</span>
                <select name="" id="">
                    <option value="">A a Z</option>
                    <option value="">Z a A</option>
                </select>
            </p>

        </section>
    </div>
}

export function DashSearchAccountAndNotices({ props }) {
    const { targetSearch } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function dispatchSearchTitle() {
        if (targetSearch == "Cours") {
            return "un cours"
        } else if (targetSearch == "Demande de cours") {
            return "une demande de cours"
        }
        else if (targetSearch == "Etudiants") {
            return "un étudiant"
        }
    }

    function dispatchRedirection() {
        if (targetSearch == "Cours") {
            navigate('/Course/add')
        } else if (targetSearch == "Demande de cours") {
            navigate('/Course-request/add')
        }
    }

    function toggleNext(e, nextNewClass) {
        const next = e.currentTarget.nextElementSibling;
        next.classList.toggle(nextNewClass)
    }

    function disconnectUser() {
        dispatch(removeAuthHeaderToken())
        dispatch(setIsDisconnected())

    }
    return (
        <div className='dash-search_account_notice'>
            {
                targetSearch != "home" && <div className="formSegmentSearchWithIcon">
                    <i className="mdi mdi-magnify"></i>
                    <input type={"search"} placeholder={"Chercher " + dispatchSearchTitle()} />
                </div>
            }

            <section className="dsad-account myDropDown">
                <p onClick={(event) => toggleNext(event, "myDropDownItemsVisible")}>
                    <SimpleImage props={{ src: "profils/connected.jpg", alt: "User pic" }} />
                    <i className="mdi mdi-chevron-down"></i>
                </p>
                <section className="myDropDownItems">
                    <Link to="/Profil">Mon profil</Link>
                    <span onClick={() => disconnectUser()}>Deconnexion</span>
                </section>
            </section>
            <section className="dsad-notices">
                <i className="mdi mdi-bell-outline"></i>
            </section>

        </div>
    )
}
{/* {
                    ["Cours", "Demande de cours"].includes(targetSearch) &&
                    <i className="mdi mdi-plus addContentBtn"
                        onClick={() => dispatchRedirection()}></i>
                } */}