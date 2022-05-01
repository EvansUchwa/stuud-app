import { Link } from "react-router-dom";
import "../Assets/styles/accueil.css"
import { InscriptionionBtn } from "../GlobalComponents/Button";
import { IllustrationImage, SimpleImage } from "../GlobalComponents/Img";
const Accueil = () => {
    return <div className="accueil">
        <div className="accueil-banner">
            <div className="ab-text">
                <h1>
                    Réseau social <br /> pour <span>
                        étudiant
                    </span>
                </h1>
                <p>Discute et partage tes cours avec les etudiant de ta classe,ta filière ou ton université. </p>
                <section>
                    <InscriptionionBtn props={{ className: "semiRounded", label: "Rejoindre l'aventure" }} />
                </section>
            </div>
            <div className="ab-illustration">

            </div>

        </div>

        <div className="accueil-stats">
            <p>
                <b>2500 +</b>
                <span>etudiants inscrits</span>
            </p>
            <p>
                <b>45000 +</b>
                <span>cours partagés</span>
            </p>
            <p>
                <b>1500 +</b>
                <span>visites tous les jours</span>
            </p>
        </div>

        <div className="accueil-fonctionnalitys">
            <div className="globalTitleWithSubtitle">
                <h2>Ce que Stuud te permet de faire</h2>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit .
                </p>
            </div>

            <section className="af-functionnalitys">
                {
                    [0, 0, 0].map((dv, index) => <div key={"af-nb" + index}>
                        <span>
                            <i className="mdi mdi-heart"></i>
                        </span>

                        <b>Lorem Ipsum</b>
                        <p>
                            Usage of the Internet is becoming more common due
                            to rapid advancement of technology and power.
                        </p>
                    </div>)
                }
            </section>
        </div>
    </div>
}

export default Accueil;