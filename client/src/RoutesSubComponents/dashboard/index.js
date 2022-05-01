import { useState } from "react"
import { useSelector } from "react-redux"
import { UrlImage } from "../../GlobalComponents/Img"
import { authSelector } from "../../Store/selectors/authSelectors"
import { PublishedCourses, AskedCourses } from "./courses";
import { Students } from "./students";
import { ChatDiscussionsPreview } from "./chat";
import { Link, useNavigate } from "react-router-dom"


export const DashStudentHello = () => {
    const userConnected = useSelector(authSelector)
    return <div className="dashStudentHello">
        {
            userConnected.generalInfos ? <>
                <UrlImage props={{ src: userConnected.generalInfos.profil_picture, alt: "User Student card" }} />
                {/* <SimpleImage props={{ src: 'profils/myUser.jpg', alt: 'dd', className: '' }} /> */}
                <section className="dsh-infos">
                    <p> <b>@_{userConnected.generalInfos.pseudo}</b> ,ravi de te revoir...</p>
                    <p>{userConnected.generalInfos.university}</p>
                    <p>{userConnected.generalInfos.faculty.toUpperCase()}</p>
                </section>
                <section className="dsh-downloads">
                    <span>Points disponible (s) </span>
                    <span>12</span>
                </section>
                <section className="dsh-profilLink">
                    <Link to="/Profil/view">Mon profil</Link>
                </section>
            </> : null
        }
    </div>
}

export const DashNavigator = () => {
    const dashHomeNavArray = [
        {
            label: 'Camarades', icon: "mdi-account-group-outline"
        },
        {
            label: 'Demandes', icon: "mdi-book-multiple-outline"
        }, {
            label: 'Cours', icon: "mdi-book-search-outline"
        }, {
            label: 'Messages', icon: "mdi-chat-outline"
        }
    ]
    const [navValue, setNavValue] = useState('Cours')
    return <div className="dashHomeNavigator">
        <section className="dhn-navItem">
            {
                dashHomeNavArray.map((dhna, index) => <label key={"dhna-k-" + index}
                    htmlFor={"dhna-" + index}>
                    <input type={'radio'} name="dhna" id={"dhna-" + index}
                        value={dhna.label} onChange={() => setNavValue(dhna.label)}
                        checked={navValue === dhna.label} />
                    <section>
                        <span>
                            <i className={"mdi " + dhna.icon}></i>
                        </span>
                        <p>{dhna.label} </p>
                    </section>
                </label>)
            }
        </section>
        <section className="dhn-navResult">
            <DashNavigationResult props={{ navValue }} />
        </section>
    </div>
}

const DashNavigationResult = ({ props }) => {
    const { navValue } = props;
    function dispatchNavigationResult() {
        if (navValue == "Cours") {
            return <PublishedCourses />
        } else if (navValue == "Demandes") {
            return <AskedCourses />
        } else if (navValue == "Camarades") {
            return <Students />
        } else if (navValue == "Messages") {
            return <ChatDiscussionsPreview />
        } else {
            return <p>Aucun</p>
        }

    }
    return <>
        <DashNavTitleAndSearch props={{
            title: "Retrouve ici la liste des " + navValue + " de ta filière ou université",
            searchPlaceholder: "Chercher avec le pseudo..."
        }} />
        {dispatchNavigationResult()}
        <DashFloatedAddButton props={{ navValue }} />
    </>
}






export const DashNavTitleAndSearch = ({ props }) => {
    const { title, searchPlaceholder } = props;
    return <>
        <h2 className="dash-menu-title">{title}</h2>
        {/* <section className="dash-menu-search">
            <input type={"search"} placeholder={searchPlaceholder} />
        </section> */}
    </>
}

const DashFloatedAddButton = ({ props }) => {
    const { navValue } = props;
    const navigate = useNavigate()
    // const navigate = useNa
    function handleAdd() {
        if (navValue == "Cours") {
            navigate('/Course/add')
        } else if (navValue == "Demandes") {
            navigate('/Course/addAsk')
        } else if (navValue == "Camarades") {
        } else if (navValue == "Messages") {
        }
    }
    return <div className="dashFloatedAddButton">
        <span onClick={() => handleAdd()}>+</span>
    </div>
}