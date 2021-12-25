import React, {useState, useEffect} from "react";

export default function CustomerDetail({ customer }) {


  return (
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
  );
}
