import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Heading } from '../components/Heading'

export default function CustomerCreatePage() {
    const navigate = useNavigate() 

    const [response, setResponse] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [formErr, setFormErr] = useState("")

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")

    function renderInput(type, value, setValue, placeholder) {
        return (
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }


    async function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("JS3-webb21")


        const payload = {
            name,
            email,
            phoneNumber,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website
        }
        
        for (const key in payload) {
            if (payload[key] === "") {
                setSubmitted(false) 
                setFormErr(key + " should not be empty")
                return;
            }
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload),
        })

        const data = response.json() 

    
        switch (response.status) {                
            case 403:
                setSubmitted(false) 
                setFormErr(data) 
                window.alert("You cannot have more than 10 customers")
                break;

            case 201:
                navigate("/customer")
                break;

            default:
                setSubmitted(false)
                break;
        }    
    }

    return (
        <div>
            <div className="container d-flex justify-content-center"> 
                <Navbar /> 
            </div>
            <Heading>
            <h2>Create Customer</h2>
            </Heading>
            <form onSubmit={handleOnSubmit} className="d-flex flex-column align-content-center form-comtrol m-4">
                {renderInput("text", name, setName, "Name")}     
                {renderInput("text", email, setEmail, "Email")}
                {renderInput("tel", phoneNumber, setPhoneNumber, "Phone Number")}
                {renderInput("text", organisationNr, setOrganisationNr, "Organization Number")}
                {renderInput("text", vatNr, setVatNr, "VAT Number")}
                {renderInput("text", reference, setReference, "Reference")}
                {renderInput("text", paymentTerm, setPaymentTerm, "Payment Term")}
                {renderInput("url", website, setWebsite, "Website", )}
                <button  className="btn btn-primary" type="submit">Create Customer</button>
            </form>

            {formErr && <span>{formErr}</span> }
            {response && (
                <p>Your customer was successfully created!</p>
            )}
            
        </div>
    )
}
