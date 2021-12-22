import React, {useState, useEffect} from "react";

export default function CustomerDetail({ customer }) {


  return (
    <div>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone Number: {customer.phoneNumber}</p>
      <p>Organization Number: {customer.orgNr}</p>
    </div>
  );
}
