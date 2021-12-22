import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import CustomerDetail from "../components/CustomerDetail"
import { Layout } from "../components/Layout"
export default function CustomerDetailPage() {
    let params = useParams()
    const [customerDetail, setCustomerDetail] = useState({})



  useEffect(() => {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${params.id}/`
    // fetch(url)
    const token = localStorage.getItem("JS3-webb21");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    fetch(url, {
        headers: headers,
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCustomerDetail(data)
    })
  }, [])

    return (
        <div>
            <div className="container d-flex justify-content-center"> 
                <Navbar /> 
            </div>
            <Layout>

            <div>
                <h2>Customer Detail Page</h2>
                <CustomerDetail customer={customerDetail} /> 
            </div>
        </Layout>
      </div>
    )
}
