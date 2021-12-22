import React from 'react'

export default function CustomerList(props) {
    return (
        <div>
            {props.customer.map(customer => {
                return (
                    <>
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                    </>
                )
            })}
        </div>
    )
}
