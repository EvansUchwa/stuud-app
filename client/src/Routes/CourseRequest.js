import React from 'react'
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import AddAskCourse from '../RoutesComponents/coursesRequest/addCourseRequest';
import { CoursesRequestList } from '../RoutesComponents/coursesRequest/coursesRequestList';

export default function CoursesRequest({ props }) {
    const { courseAction, courseId } = props;
    return (
        <div className='coursesRequest'>
            {
                (() => {
                    if (courseAction == "list") {
                        return <div className="coursesRequest-list">
                            <CoursesRequestList />
                        </div>
                    }
                    else if (courseAction == "add") {
                        return <div className='courses-request-actions'>
                            <BreadCumbs props={{ currentPage: "Ajouter une demande de cours", lastPageLink: '' }} />
                            <h1>Ajout de demande de cours</h1>
                            <AddAskCourse />
                        </div>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
