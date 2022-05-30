import React from 'react'
import { useSelector } from 'react-redux';
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import AddAskCourse from '../RoutesComponents/coursesRequest/addCourseRequest';
import { CoursesRequestList } from '../RoutesComponents/coursesRequest/coursesRequestList';
import { authSelector } from '../Store/selectors/authSelectors';

export default function CoursesRequest({ props }) {
    const { courseAction, courseId } = props;
    const auth = useSelector(authSelector)
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
                            <h1>Publie ta demande de cours</h1>
                            <AddAskCourse props={{ auth }} />
                        </div>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
