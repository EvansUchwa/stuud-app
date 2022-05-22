import React from 'react'
import { SimpleImage } from '../../GlobalComponents/Img'
function DashContributors() {
    const contributors = [
        { "pseudo": "Evans", "courses": 150, "course-request": 22, "view": 1000, color: "var(--or)" },
        { "pseudo": "Hicham", "courses": 100, "course-request": 12, "view": 990, color: "var(--argent)" },
        { "pseudo": "Hugo", "courses": 50, "course-request": 82, "view": 190, color: "var(--bronze)" },
    ]
    return (

        <div className="dl-contributors">
            <h2>Meilleur contributeurs</h2>
            <section className="dlc-bests">
                {
                    contributors.map((bc, j) => <article
                        key={"the best contributor " + j}
                        className="dlc-best">
                        <SimpleImage props={{
                            alt: "Friend res", src: "profils/myUser.jpg",
                            withBadge: true, badgeContent: "1st",
                            badgeStyle: {
                                backgroundColor: bc.color,
                                color: "white", width: "4vh", height: "4vh",
                                borderRadius: "100%"
                            }
                        }} />
                        <p> {bc.pseudo} </p>
                        <button>Visiter le profil</button>
                        <span className="contributor-coursesCount">960 cours publié</span>
                        <div className="contributor-reactionsStats">
                            <p>
                                <i className="mdi mdi-eye"></i>
                                1200
                            </p>
                            <p>
                                <i className="mdi mdi-heart"></i>
                                120
                            </p>
                            <p>
                                <i className="mdi mdi-comment"></i>
                                12 0
                            </p>
                        </div>
                    </article>)
                }
            </section>
            <article className="dlc-user">
                <SimpleImage props={{
                    alt: "Friend res", src: "profils/myUser.jpg",
                }} />
                <p>
                    <b>
                        Moi
                    </b>
                    <br />
                    1000 th
                </p>
                <span className="contributor-coursesCount">100 Contribution</span>
                <div className="contributor-reactionsStats">
                    <p>
                        <i className="mdi mdi-eye"></i>
                        1200
                    </p>
                    <p>
                        <i className="mdi mdi-heart"></i>
                        10
                    </p>
                    <p>
                        <i className="mdi mdi-comment"></i>
                        100
                    </p>
                </div>

            </article>
        </div>
    )
}

export default DashContributors
