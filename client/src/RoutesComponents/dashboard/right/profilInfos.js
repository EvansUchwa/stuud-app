import React from 'react'
import { Link } from 'react-router-dom'
import { SimpleImage } from '../../../GlobalComponents/Img'
function DashRightProfilInfos({ props }) {
    const { auth } = props
    const { pseudo } = auth.generalInfos
    return (
        <div className="dr-profilInfos">
            <SimpleImage props={{
                alt: "Friend res", src: "profils/connected.jpg",
            }} />
            <b>{pseudo}</b>
            <ul className="drpi-publications">
                <li>
                    <Link to="">
                        <p>Mes Cours publiés (2) </p>
                        <span>
                            <i className="mdi mdi-chevron-right"></i>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <p>Mes Demande de cours publiés (2)</p>
                        <span>
                            <i className="mdi mdi-chevron-right"></i>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <p>Mes StuudyList (2)</p>
                        <span>
                            <i className="mdi mdi-chevron-right"></i>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DashRightProfilInfos
