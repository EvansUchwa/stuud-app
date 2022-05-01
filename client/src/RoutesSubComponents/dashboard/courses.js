import { CourseCard } from "../../GlobalComponents/Card"
export const PublishedCourses = () => {
    return <div className="">
        <section className="courses-list">
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
    </div>
}


export const AskedCourses = () => {
    return <div className="">

        <section className="courses-list">
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
    </div>
}