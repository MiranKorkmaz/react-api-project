import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function CustomerDetail({ customer }) {
  let params = useParams()

  const [name, setName] = useState("")
  const [organisationNr, setOrganisationNr] = useState("")
  const [vatNr, setVatNr] = useState("")
  const [reference, setReference] = useState("")
  const [paymentTerm, setPaymentTerm] = useState("")
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${params.id}/`
    const token = localStorage.getItem("JS3-webb21")
    const payload = {
      name, 
      email, 
      vatNr, 
      reference, 
      organisationNr, 
      paymentTerm, 
      website, 
      phoneNumber
    }


    fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => { 
      setName(data.name)
      setOrganisationNr(data.organisationNr)
      setVatNr(data.vatNr)
      setReference(data.setReference)
      setPaymentTerm(data.paymentTerm)
      setWebsite(data.website)
      setEmail(data.email)
      setPhoneNumber(data.phoneNumber)
    })
  }

  function renderInput(type, value, placeholder, setValue) {
    return (
      <input
        type={type} 
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
    )
  }

  return (
    <div>
      <div>
        <p>Name: {customer.name}</p>
        <p>Email: {customer.email}</p>
        <p>Phone Number: {customer.phoneNumber}</p>
        <p>Organization Number: {customer.organisationNr}</p>
        <p>Vat Number: {customer.vatNr} </p>
        <p>Reference: {customer.reference}</p>
        <p>Payment Term: {customer.paymentTerm}</p>
        <p>Website: <a href={customer.website} target="_blank">{customer.website}</a></p>
      </div>
      <div>
        <h2>Edit Customer</h2>
        <form onSubmit={handleOnSubmit}>
            {renderInput("text", name, "Name", setName)}
            {renderInput("text", organisationNr, "Org Nr", setOrganisationNr)}
            {renderInput("text", vatNr, "VAT Nr", setVatNr)}
            {renderInput("text", reference, "Reference", setReference)}
            {renderInput("text", paymentTerm, "Payment Term", setPaymentTerm)}
            {renderInput("url", website, "Website", setWebsite)}
            {renderInput("email", email, "Email", setEmail)}
            {renderInput("tel", phoneNumber, "Phone Nr", setPhoneNumber)}
            <br/>
            <button className="btn btn-primary" type="submit">Update Information</button>
        </form>
      </div>
    </div>
  );
}
