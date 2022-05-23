import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import { SimpleSectionLoader } from '../../GlobalComponents/loader'
import useProfil from '../../Hooks/useProfil'
export default function ViewProfil() {

    const { profil } = useProfil()

    if (profil === null) {
        return <SimpleSectionLoader />
    }
    return (
        <div className='profil'>
            <div className='profil-view'>
                <section className='pv-header'>
                    <div className='pvh-bg'>
                        <SimpleImage props={{ src: "bgs/profil2.svg", alt: "Profil bg", className: "rounded" }} />
                    </div>
                    <article className='pvh-globalInfos'>
                        <SimpleImage props={{ src: "profils/connected.jpg", alt: "Profil llol", className: "rounded" }} />
                        <div className=''>
                            <b>{profil.pseudo}</b> <br />
                            <p>{profil.university}</p>
                            <p>{profil.faculty.toUpperCase() + " / " + profil.study_level}</p>
                            <article className='pvh-actions'>
                                <button>S'abonner</button>
                                <button>Message</button>

                            </article>
                        </div>

                    </article>
                    <article className='pvh-stats'>
                        <p>
                            <b>120</b>
                            Cours publié
                        </p>
                        <p>
                            <b>1000</b>
                            Vue totalisé
                        </p>
                        <p>
                            <b>120</b>
                            Abonnées
                        </p>
                    </article>
                </section>

                <section className='pv-information_settings'>
                    <article className='pv-informations'>
                        <h3>A propos de ...</h3>
                        {/* <b>Description</b> */}
                        <p>
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths,
                            choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p>
                        <p>
                            <b>Mon mail: </b> mail@gmail.com
                        </p>
                        <ul>
                            <b>Mes reseaux :</b>
                            <li>
                                <i className='mdi mdi-facebook'></i>
                            </li>
                            <li>
                                <i className='mdi mdi-facebook'></i>
                            </li>
                            <li>
                                <i className='mdi mdi-facebook'></i>
                            </li>
                        </ul>
                    </article>
                    <article className='pv-p'>
                        <h3>Paramètre du compte</h3>
                        <div>
                            <b>Souscription</b>
                            <p>
                                <label className='inputSwitch'>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>
                                    M'envoyer un mail quand j'ai un nouveau follower
                                </span>
                            </p>
                        </div>

                        <div>
                            <b>Cours</b>
                            <p>
                                <label className='inputSwitch'>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>
                                    M'envoyer un mail quand un nouveau cours est publié dans ma filière
                                </span>
                            </p>
                            <p>
                                <label className='inputSwitch'>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>
                                    M'envoyer un mail quand une demande de cours est faite dans ma filière
                                </span>
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}
