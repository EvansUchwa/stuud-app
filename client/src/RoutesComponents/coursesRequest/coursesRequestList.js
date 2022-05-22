import { CourseCard } from "../../GlobalComponents/Card"
export const CoursesRequestList = () => {
    return <section className="crl-courses">
        {
            [0, 0, 0, 0, 0].map((friend, index) => <CourseCard key={"course card nb" + index}
                props={{
                    cardType: "askedCourse",
                    id: "2", type: "CM/TD",
                    name: "How to be Super hero ?",
                    faculty: "Psychologie Plitic",
                    number: 17, autor: "Batman"
                }} />)
        }
    </section>

}