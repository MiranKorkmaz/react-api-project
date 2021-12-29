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
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const payload = {name, email, vatNr, reference, organisationNr, paymentTerm, website, phoneNumber}
    fetch(url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        setName(data.name)
        setEmail(data.email)
        setVatNr(data.vatNR)
        setReference(data.reference)
        setOrganisationNr(data.organisationNr)
        setPaymentTerm(data.paymentTerm)
        setWebsite(data.website)
        setPhoneNumber(data.phoneNumber)
    })

}

  function renderInput(type, customer, placeholder, setValue) {
    return (
      <input
        type={type}
        value={customer}
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
        <form onSubmit={handleOnSubmit}>
            {renderInput("text", name, "Name", setName)}
            {renderInput("text", organisationNr, "Org Nr", setOrganisationNr)}
            {renderInput("text", vatNr, "VAT Nr", setVatNr)}
            {renderInput("text", reference, "Reference", setReference)}
            {renderInput("text", paymentTerm, "Payment Term", setPaymentTerm)}
            {renderInput("url", website, "Website", setWebsite)}
            {renderInput("email", email, "Email", setEmail)}
            {renderInput("tel", phoneNumber, "Phone Nr", setPhoneNumber)}
          <button type="submit">Update Information</button>
        </form>
      </div>
    </div>
  );
}
