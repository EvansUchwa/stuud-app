import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
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
            <i className="mdi mdi-filter"></i>
            <p>
                <span>Filtrer par</span>
                <select name="" id="">
                    <option value="">A</option>
                    <option value="">B</option>
                </select>
            </p>

        </section>
    </div>
}

export function DashSearchUserOrCourse({ props }) {
    const { targetSearch } = props;
    const navigate = useNavigate();

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
    return (
        <div className='dash-search_add_notice'>
            <div className="formSegmentSearchWithIcon">
                <i className="mdi mdi-magnify"></i>
                <input type={"search"} placeholder={"Chercher " + dispatchSearchTitle()} />
            </div>

            <section className="dsad-add_notices">
                {
                    ["Cours", "Demande de cours"].includes(targetSearch) &&
                    <i className="mdi mdi-plus addContentBtn"
                        onClick={() => dispatchRedirection()}></i>
                }
                <i className="mdi mdi-bell"></i>
            </section>

        </div>
    )
}