import React from 'react'
import { Link } from 'react-router-dom'

export function BreadCumbs({ props }) {
    const { currentPage, lastPageLink } = props
    return (
        <section className='breadCumbs'>
            <Link to={lastPageLink}><i className='mdi mdi-arrow-left'></i> Revenir en arriere</Link>
            /<span>{currentPage}</span>
        </section>
    )
}
