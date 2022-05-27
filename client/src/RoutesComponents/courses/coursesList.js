import { CourseCard } from "../../GlobalComponents/Card"
import { Link } from "react-router-dom"
export const CoursesList = () => {
    return <section className="cl-courses">
        <Link to="/Course/add" className="addNewCourseLinks">
            <i className="mdi mdi-plus"></i>
        </Link>
        {
            [0, 0, 0, 0, 0].map((friend, index) => <CourseCard key={"course card nb" + index}
                props={{
                    cardType: "publishedCourse",
                    id: "2", type: "CM/TD",
                    name: "How to be Super hero ?",
                    faculty: "Psychologie Plitic",
                    number: 17, autor: "Batman"
                }} />)
        }
    </section>

}


