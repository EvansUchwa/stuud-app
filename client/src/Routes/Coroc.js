import React from 'react'
import { useSelector } from 'react-redux';
import { BreadCumbs } from '../GlobalComponents/Navigation/Other';
import Add_coroc from '../RoutesComponents/coroc/add';
import Coroc_List from '../RoutesComponents/coroc/list';
import { authSelector } from '../Store/selectors/authSelectors';
// import { SearchUserOrCourse } from '../RoutesSubComponents/searchBar';


export default function CoursesOrRequestOfCourse({ props }) {
    const { type, courseAction, courseId } = props;
    const auth = useSelector(authSelector);
    return (
        <div className='courses'>
            {
                (() => {
                    if (courseAction == "list") {
                        return <div className="courses-list">
                            <Coroc_List props={{ type, auth }} />
                        </div>
                    }
                    else if (courseAction == "add") {
                        return <div className='courses-actions'>

                            <Add_coroc props={{ type, auth }} />
                        </div>
                    }
                })()
            }
            {/* <Outlet /> */}
        </div>
    )
}
