import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import CustomerDetail from "../components/CustomerDetail"

export default function CustomerDetailPage() {
    let params = useParams()
    return (
        <div>
            <div className="container d-flex justify-content-center"> 
                <Navbar /> 
            </div>
            <div>
                <h2>Customer Detail Page</h2>
                <CustomerDetail id={params.id} />
            </div>

        </div>
    )
}
