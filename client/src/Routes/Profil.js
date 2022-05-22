// import "../Assets/styles/profil.css";

import { useParams } from "react-router"
import { Finaliser_profil } from "../RoutesComponents/profil/finaliser"
import ViewProfil from "../RoutesComponents/profil/viewProfil";

export const Profil = () => {
    const { profilAction } = useParams();
    return <div className="profil">
        {
            (() => {
                if (profilAction && profilAction == 'finalisation') {
                    return <Finaliser_profil />
                } else {
                    return <ViewProfil />
                }
            })()
        }
    </div>
}