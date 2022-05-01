import React from 'react'
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import AddAskCourse from '../RoutesSubComponents/courses/addAskCourse';
import AddCourse from '../RoutesSubComponents/courses/addCourse';

export default function Courses({ props }) {
    const { courseAction, courseId } = props;
    return (
        <div className='course'>
            {
                (() => {
                    if (courseAction == "add") {
                        return <>
                            <BreadCumbs props={{ currentPage: "Ajouter un cours", lastPageLink: '' }} />
                            <h1>Ajout de cours</h1>
                            <AddCourse />
                        </>
                    } else if (courseAction == "addAsk") {
                        return <>
                            <BreadCumbs props={{ currentPage: "Ajouter une demande de cours", lastPageLink: '' }} />
                            <h1>Ajout de demande cours</h1>
                            <AddAskCourse />
                        </>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
