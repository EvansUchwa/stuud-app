import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
import { Link } from "react-router-dom"
export default function ViewProfil() {
    return (
        <div className='profil'>
            <div className='profil-view'>
                <section className='pv-header'>
                    <article>
                        <SimpleImage props={{ src: "profils/myUser.jpg", alt: "Profil llol", className: "rounded" }} />
                        <div className='pv-h-pseudo_followers'>
                            <b>Pseudo Nyme</b> <br />
                            <p><i className='mdi mdi-account-group-outline'></i> 120 Abonnée(s)  </p>
                        </div>
                        <div className='pv-h-buttons_links'>
                            <Link to="">
                                <i className='mdi mdi-chat'></i>
                                Chat</Link>
                            <span>
                                <i className='mdi mdi-content-copy'></i>
                                Partager le profil
                            </span>
                        </div>
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
