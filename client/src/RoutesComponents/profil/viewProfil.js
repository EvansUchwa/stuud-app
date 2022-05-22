import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import { Link } from "react-router-dom"
export default function ViewProfil() {
    return (
        <div className='profil'>
            <div className='profil-view'>
                <section className='pv-header'>
                    <div className='pvh-bg'>
                        <SimpleImage props={{ src: "bgs/profil2.svg", alt: "Profil bg", className: "rounded" }} />
                    </div>
                    <article className='pvh-globalInfos'>
                        <SimpleImage props={{ src: "profils/myUser.jpg", alt: "Profil llol", className: "rounded" }} />
                        <div className=''>
                            <b>Pseudo Nyme</b> <br />
                            <article className='pvh-actions'>
                                <button>S'abonner</button>
                                <button>Message</button>

                            </article>
                            <p>Université de .........................</p>
                            <p>Santé et Archeologie</p>
                            <p>Troisième Année</p>
                        </div>

                    </article>
                    <article className='pvh-stats'>
                        <p>
                            <b>120</b>
                            Quelque chose
                        </p>
                        <p>
                            <b>120</b>
                            Quelque chose
                        </p>
                        <p>
                            <b>120</b>
                            Quelque chose
                        </p>
                    </article>
                </section>

                <section className='pv-information_settings'>
                    <article className='pv-i'>
                        <h3>A propos de ce profil</h3>
                        {/* <b>Description</b> */}
                        <p>
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths,
                            choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p>
                        <p>
                            <b>Nom et Prenom: </b> Jean Jaque
                        </p>
                        <p>
                            <b>Email: </b> mail@gmail.com
                        </p>
                        <p>
                            <b>Université: </b> Jean Jaques Rousseau
                        </p>
                        <p>
                            <b>Niveau: </b> Licens/Master/doctorat
                        </p>
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
