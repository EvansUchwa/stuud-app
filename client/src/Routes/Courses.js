import React from 'react'
import { useSelector } from 'react-redux';
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import AddCourse from '../RoutesComponents/courses/addCourse';
import { CoursesList } from '../RoutesComponents/courses/coursesList';
import { authSelector } from '../Store/selectors/authSelectors';
// import { SearchUserOrCourse } from '../RoutesSubComponents/searchBar';


export default function Courses({ props }) {
    const { courseAction, courseId } = props;
    const auth = useSelector(authSelector);
    return (
        <div className='courses'>
            {
                (() => {
                    if (courseAction == "list") {
                        return <div className="courses-list">
                            <CoursesList />
                        </div>
                    }
                    else if (courseAction == "add") {
                        return <div className='courses-actions'>
                            <BreadCumbs props={{ currentPage: "Ajouter un cours", lastPageLink: '' }} />
                            <h1>Publie ton cours</h1>
                            <AddCourse props={{ auth }} />
                        </div>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
