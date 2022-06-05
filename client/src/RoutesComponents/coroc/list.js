import { CourseCard } from "../../GlobalComponents/Card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { axiosBaseSelector } from "../../Store/selectors/axiosSelector";

const Coroc_List = ({ props }) => {
    const { type } = props;
    const axiosBase = useSelector(axiosBaseSelector);
    const [corocs, setCorocs] = useState([])

    async function getCoroc() {
        let urlReq = type === "course" ? "/course/all" : "/course-request/all"
        const get = await axios.get(axiosBase + urlReq);
        return setCorocs(get.data)
    }

    useEffect(() => {
        getCoroc()
    }, [type])
    return <section className="cl-courses">
        <Link to="/Course/add" className="cardSize addNewCourseLink">
            <i className="mdi mdi-plus"></i>
        </Link>
        {
            corocs.map((coroc, index) => <CourseCard key={"course card nb" + index}
                props={{
                    cardType: "fileNbStyle_" + type,
                    coroc, autor: "Batman"
                }} />)
        }
    </section>

}

export default Coroc_List;


