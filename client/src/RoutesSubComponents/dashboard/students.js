import { StudentCard } from "../../GlobalComponents/Card"
export const Students = () => {
    return <div className="students">
        <section className="students-list">
            {
                [0, 0, 0, 0, 0].map((friend, index) => <StudentCard key={"student card nb" + index}
                    props={{
                        id: "2", pseudo: "Batman",
                        university: "Arkham faculty mother fucker",
                        faculty: "Psychologie Plitic",
                    }} />)
            }
        </section>
    </div>
}