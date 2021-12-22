import React, {useState} from 'react'

export default function CustomerCreatePage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [orgNr, setOrgNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")

    const [response, setResponse] = useState(null)

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

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("JS3-webb21")
        const payload = {
            name, 
            email,
            phoneNumber,
            orgNr,
            vatNr,
            reference,
            paymentTerm,
            website
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data => setResponse(data))
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="d-flex flex-column align-content-center">
                <div className="mb-2">
                    <label for="Name">Name</label>
                    {renderInput("text", name, setName, "Name")}     
                </div>
                {renderInput("text", email, setEmail, "Email")}
                {renderInput("tel", phoneNumber, setPhoneNumber, "Phone Number")}
                {renderInput("text", orgNr, setOrgNr, "Organization Number")}
                {renderInput("text", vatNr, setVatNr, "VAT Number")}
                {renderInput("text", reference, setReference, "Reference")}
                {renderInput("text", paymentTerm, setPaymentTerm, "Payment Term")}
                {renderInput("url", website, setWebsite, "Website")}
                <button type="submit">Create Customer</button>
            </form>
            {response && (
                <p>Your customer was successfully created!</p>
            )}
        </div>
    )
}
