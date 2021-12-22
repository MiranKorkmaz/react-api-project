import React, {useEffect, useState} from 'react'

export default function MyPage() {
    const [myData, setMyData] = useState(null)
    useEffect(() => {
        const url = "https://frebi.willandskill.eu/api/v1/me/"
        const token = localStorage.getItem("JS3-webb21")
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setMyData(data))
    }, [])

    return (
        <div>
            <h1>My Page</h1>
            {myData && (
                <>
                    <h2>{myData.firstName} {myData.lastName}</h2>
                    <p>
                        Your email address is {myData.email}
                    </p>
                </>
            )}
            
        </div>
    )
}
