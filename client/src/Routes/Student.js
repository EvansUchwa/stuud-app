import React from 'react'
import { StudentsList } from '../RoutesComponents/students/studentsList';

function Student({ props }) {
    const { studentAction } = props;
    return (
        <div className='students'>
            {
                (() => {
                    if (studentAction == "list") {
                        return <div className="students-list">
                            <StudentsList />
                        </div>
                    }

                })()
            }
        </div>
    )
}

export default Student;