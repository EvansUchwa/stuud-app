import React from 'react'
import { useLocation, useParams } from 'react-router'
import { IllustrationImage } from '../GlobalComponents/Img';

export default function Error() {
    const location = useLocation();
    function dispatchErrorImg() {
        if (location.pathname == "/offline") {
            return 'offline.svg'
        } else if (location.pathname == "/ressourceNotFound") {
            return 'notFound.svg'
        } else {
            return '404.svg'
        }
    }
    return (
        <div className='errors'>
            <section>
                <IllustrationImage props={{ src: "errors/" + dispatchErrorImg(), alt: "Error img" }} />
                {
                    (() => {
                        if (location.pathname == "/offline") {
                            return <p>Oops ,Tu es offline :(</p>
                        } else if (location.pathname == "/ressourceNotFound") {
                            return <p>Oops, Cette ressource n'est plus disponible</p>
                        } else {
                            // pageNotFound
                            return <p>Page Introuvable</p>
                        }
                    })()
                }

            </section>

        </div>
    )
}
