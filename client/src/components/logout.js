import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();

    // promises

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                // Accept: 'application/json',
                'Contact-Type': 'application/json'
            }
            // credentials: "include"
        }).then((res) => {
            navigate('/login', { replace: true })
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => { console.log(err); });
    })
    return (
        <>
            <p>
                Logout ka page
            </p>
        </>
    )
}

export default Logout