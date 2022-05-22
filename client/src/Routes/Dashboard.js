// import "../Assets/styles/dashboard.css";
import { Link } from "react-router-dom";
import { IllustrationImage, SimpleImage } from "../GlobalComponents/Img";
import DashContributors from "../RoutesComponents/dashboard/contributors";
import DashHello from "../RoutesComponents/dashboard/hello";
import { DashLastPublications } from "../RoutesComponents/dashboard/lastPublications";
import DashStats from "../RoutesComponents/dashboard/stats";
export const Dashboard = () => {
    const msg = 'Voila Voili voilo'
    return <div className="dashboard">
        <h1>Dashboard</h1>
        <section className="dashLeft">
            <DashHello />
            {/* <DashStats /> */}
            <DashLastPublications props={{ type: "course" }} />
            <DashLastPublications props={{ type: "course request" }} />

            <DashContributors />
        </section>
        <section className="dashRight">
            <div className="dr-profilInfos">
                <SimpleImage props={{
                    alt: "Friend res", src: "profils/myUser.jpg",
                }} />
                <b>Pseudonyme</b>
                <ul className="drpi-publications">
                    <li>
                        <p>Cours publiés</p>
                        <span>2</span>
                    </li>
                    <li>
                        <p>Demande de cours publiés</p>
                        <span>2</span>
                    </li>
                    <li>
                        <p>StuudyList</p>
                        <span>2</span>
                    </li>
                </ul>
            </div>
            {/* <article>
                <h2>Quel chose doit etre ici</h2>
            </article> */}
            <div className="dr-followRequests">
                <section className="drf-title">
                    <h2>Invitations</h2>
                    <Link to="">Tout voir</Link>
                </section>
                <section className="drf-requests">
                    {
                        [0, 0, 0, 0, 0].map((iv, ind) => <article
                            key={"follow req" + ind}
                            className="dr-followRequest">
                            <SimpleImage props={{ alt: "Friend res", src: "profils/myUser.jpg" }} />
                            <p className="drf-text">
                                <b>Nom Prenom</b>
                                <span>Lorem ipsum fdp</span>
                            </p>
                            <p className="drf-actions">
                                <i className="mdi mdi-check"></i>
                                <i className="mdi mdi-close"></i>
                            </p>
                        </article>)
                    }
                </section>
            </div>
        </section>
    </div>
}
export default Dashboard;