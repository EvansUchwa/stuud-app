import React from 'react'

export function SearchUserOrCourse({ props }) {
    const { targetSearch } = props
    return (
        <div className='searchUserOrCourse'>
            <input type={"search"} placeholder={"Chercher un ..." + targetSearch} />
        </div>
    )
}

