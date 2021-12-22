import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="m-2 ml-3 mr-3 "to="/home">Home</Link>
            <Link className="m-2 ml-3 mr-3" to="/customer/create">Create Customer</Link>
            <Link className="m-2 ml-3 mr-3" to="/profile">My Profile</Link>
        </nav>
    )
}
