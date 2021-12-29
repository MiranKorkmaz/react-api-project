import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Heading } from '../components/Heading'

const Paragraph = styled.p`
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
`

export default function HomePage() {
    return (
        <div>
            <Navbar />
        <Heading>
            <h2>👋Welcome!</h2>
        </Heading>
        <Paragraph>
                Good to see you here
        </Paragraph>
        </div>
    )
}
