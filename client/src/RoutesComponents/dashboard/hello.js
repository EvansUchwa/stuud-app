import React from 'react'
import { Link } from 'react-router-dom'
import { IllustrationImage } from '../../GlobalComponents/Img'

function DashHello() {
    return (
        <div className="dl-hello">
            <article className="dlh-texts">
                <h2>Hey PSeudo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi natus consequatur corrupti sunt commodi odit eligendi, fuga at.
                    {/* eos accusamus suscipit nemo facilis quo cum est dicta dolore cupiditate perspiciatis. */}
                </p>
                <Link to="">Mon profil</Link>
            </article>
            <article className="dlh-points">
                <IllustrationImage props={{ alt: "Nombre de point stuud", src: "happy.svg" }} />
            </article>
        </div>
    )
}

export default DashHello
