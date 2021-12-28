import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { Heading } from '../components/Heading'
import styled from 'styled-components'

const Paragraph = styled.p`
    margin-top: 2rem;
`

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
            <div className="container d-flex justify-content-center"> 
                <Navbar /> 
            </div>
            <div className="mt-5">
            <Heading>
                    <h2>Profile</h2>
            </Heading>
            <Paragraph>
            {myData && (
                <>
                    <p>
                        Your name is {myData.firstName} {myData.lastName}
                    </p>
                    <p>
                        Your email address is {myData.email}
                    </p>
                </>
            )}
            </Paragraph>
            </div>
            
        </div>
    )
}
