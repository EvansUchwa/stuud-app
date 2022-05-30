import { Link } from "react-router-dom";

export function AddNewCourseOrRequestLinks({ props }) {
    const { type, height, width, className } = props;
    function dispatchLink() {
        if (type == "course") {
            return "/Course/add"
        } else if (type == "course-request") {
            return "/Course-request/add"
        }
    }


    return <Link to={dispatchLink()} className={type === "course" ? 'addNewCourseLink' : "addNewCourseRequestLink"} >
        <i className="mdi mdi-plus"></i>
    </Link>
}