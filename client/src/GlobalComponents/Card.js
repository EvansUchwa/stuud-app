import { UrlImage, SimpleImage } from "./Img"

export const StudentCard = ({ props }) => {
    const { pseudo, university, faculty, id, profil_picture } = props
    return <div className="studentCard">
        <section className="sc-head">
            {
                profil_picture ?
                    <UrlImage props={{ src: profil_picture, alt: 'serv user profil pic' + id, className: '' }} /> :
                    <SimpleImage props={{ src: 'profils/myUser.jpg', alt: 'default user profil pic' + id, className: '' }} />
            }
        </section>
        <section className="sc-body">
            <b> @_{pseudo} </b>
            <p>{university} </p>
            <p>{faculty}</p>
        </section>
        <section className="sc-foot">
            <span>
                <i className="mdi mdi-account-plus"></i>
            </span>
            <span>
                <i className="mdi mdi-chat"></i>
            </span><span>
                <i className="mdi mdi-account-lock"></i>
            </span>
        </section>
    </div>
}

export const CourseCard = ({ props }) => {
    const { cardType, id, type, name, faculty, number, autor } = props
    const cardColorClass = cardType;
    return <div className={"courseCard "}>
        <section className="cc-head">
            <div className={cardColorClass}>
                {/* <span>
                    12 <i className="mdi mdi-eye"></i>
                </span>
                <span>
                    12 <i className="mdi mdi-comment"></i>
                </span>
                <span>
                    12 <i className="mdi mdi-share"></i>
                </span> */}
                <span></span>
                <span></span>
                <span></span>

            </div>
        </section>
        <section className="cc-body">
            <b>{name} </b>
            <p> {type} </p>
            <p>{faculty}</p>
            <p>Course {number}</p>

        </section>
        <section className="cc-foot">
            <SimpleImage props={{ src: 'profils/myUser.jpg', alt: 'dd', className: '' }} />
            <span>
                Par @_{autor}
            </span>
        </section>
    </div>
}