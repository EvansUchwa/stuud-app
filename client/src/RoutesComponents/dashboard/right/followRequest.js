import React from 'react'
import { Link } from 'react-router-dom'
function DashRightFollowRequest() {
    return (
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
    )
}

export default DashRightFollowRequest
