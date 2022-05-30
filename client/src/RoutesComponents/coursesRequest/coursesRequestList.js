import { CourseCard } from "../../GlobalComponents/Card"
import { Link } from "react-router-dom"
export const CoursesRequestList = () => {
    return <section className="crl-courses">
        <Link to="/Course-request/add" className="cardSize addNewCourseRequestLink">
            <i className="mdi mdi-plus"></i>
        </Link>
        {
            [0, 0, 0, 0, 0].map((friend, index) => <CourseCard key={"course card nb" + index}
                props={{
                    cardType: "requestedCourse",
                    id: "2", type: "CM/TD",
                    name: "How to be Super hero ?",
                    faculty: "Psychologie Plitic",
                    number: 17, autor: "Batman"
                }} />)
        }
    </section>

}