import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IllustrationImage } from '../../GlobalComponents/Img'
import { IllustrationAndTextMessageModal } from '../../GlobalComponents/Modal'
import { setModalContentOnStore, setModalOnStore } from '../../Store/actions/modalActions'
import { authSelector } from '../../Store/selectors/authSelectors'

function dispatchLocation() {
    if (process.env === 'production') {
        return window.location
    } else {
        return 'http://localhost:3000'
    }
}

function makeCopy(field, afterCopyFunction) {
    var copyText = document.querySelector(field)
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    // alert("Lien copié avec succes: " + copyText.value);
    afterCopyFunction()
}
function DashHello() {
    const auth = useSelector(authSelector);
    const [hasCopy, setHasCopy] = useState(false);

    const dispatch = useDispatch();
    function showSuccessCopyModal() {
        dispatch(setModalContentOnStore(<CopyHasMakePopup />))
        dispatch(setModalOnStore(true))
    }
    return (
        <div className="dl-hello">
            <article className="dlh-texts">
                <h2>Hey Pseudo</h2>
                <p>
                    N'hesite surtout pas a partager le lien de la plateforme avec tes potes etudiants(e),
                    tu contribue ainsi a l'aggrandissement de la communauté Stuud
                    et en plus tu gagne
                    <b>10 Stuudycoin</b> pour chaque étudiant inscrit grace a ton lien .
                    {/* eos accusamus suscipit nemo facilis quo cum est dicta dolore cupiditate perspiciatis. */}
                </p>
            </article>
            <article className="dlh-points">
                <IllustrationImage props={{ alt: "Nombre de point stuud", src: "invite-share.svg" }} />
            </article>
            <article className='dlh-invitationLink'>
                <input type={"text"} className='invitationLink'
                    value={dispatchLocation() + "/Auth/Inscription/invite/1252552"}
                    onChange={() => null} />

                <button onClick={() => makeCopy('.invitationLink', showSuccessCopyModal)}>Copier <i className='mdi mdi-content-copy'></i></button>
            </article>
        </div>
    )
}

function CopyHasMakePopup() {
    return <IllustrationAndTextMessageModal props={{
        illustration: <IllustrationImage props={{ alt: "Nombre de point stuud", src: "invite-set.svg" }} />,
        text: <>
            <h2>Ton lien d'invitation a bien été copié !</h2>
            <p>
                Tu peux maintenant l'envoyer a tes potes pour stuuder ensemble,haha il fallait la faire celle là!
            </p>
        </>
    }} />

}

export default DashHello
