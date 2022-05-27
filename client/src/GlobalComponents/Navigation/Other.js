import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
export function BreadCumbs({ props }) {
    const { currentPage, lastPageLink } = props;
    const navigate = useNavigate()
    return (
        <section className='myBreadCumbs'>
            <p onClick={() => navigate(-1)}><i className='mdi mdi-arrow-left'></i> Revenir en arriere</p>
            /<span>{currentPage}</span>
        </section>
    )
}
