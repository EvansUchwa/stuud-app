import React from 'react'
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import AddCourse from '../RoutesComponents/courses/addCourse';
import { CoursesList } from '../RoutesComponents/courses/coursesList';
// import { SearchUserOrCourse } from '../RoutesSubComponents/searchBar';


export default function Courses({ props }) {
    const { courseAction, courseId } = props;
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
                            <h1>Ajout de cours</h1>
                            <AddCourse />
                        </div>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
