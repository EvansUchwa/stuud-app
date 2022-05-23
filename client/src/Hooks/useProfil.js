import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { authSelector } from '../Store/selectors/authSelectors';

function useProfil() {
    const [refetch, setRefetch] = useState(false);
    const [profil, setProfil] = useState(null);
    const profilInfos = useSelector(authSelector)

    useEffect(() => {
        setProfil(profilInfos.generalInfos)
    }, [])

    return { profil, refetch }
}

export default useProfil
